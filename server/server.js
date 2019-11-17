import express from 'express';
import React from 'react';
import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import bodyParser from 'body-parser';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';

import reducers from '../src/js/redux/reducers';
import MyApp from '../src/js/App';
import pkg from '../package.json';
import { initialLoadServerData } from '../src/js/redux/actions/initialState';
import fakeData from './fakeData';

const ENV = process.env.NODE_ENV;
const middleware = [
    createPromise(), // default action suffixes are ['PENDING', 'FULFILLED', 'REJECTED']
    thunk
];
const middlewareParam = applyMiddleware(...middleware);

const server = express();

if (ENV === 'development') {
    server.use('/dist', express.static('dist'));
}

server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

if (ENV === 'development') {
    server.get('/', (request, response) => {
        // create new store for each request
        // add fake data from reducers here
        const store = createStore(reducers, middlewareParam);
        // organize data with our reducers

        store.dispatch(initialLoadServerData(fakeData));

        // WITH header and footer
        const htmlPage = fs.readFileSync(path.join(__dirname, '../src/local/index.dev.html')).toString();

        response.send(
            htmlPage.replace(
                // '__REACT__', ReactDOMServer.renderToString( // USE 'hydrate' ON CLIENT
                '__REACT__', ReactDOMServer.renderToStaticMarkup( // USE 'render' ON CLIENT
                    <Provider store={store}><MyApp /></Provider>
                )
            ).replace(
                // JSON.stringify(store.getState()).replace(/</g, '\\u003c')
                '__INITIAL_STATE__', JSON.stringify(store.getState())
            )
        );
    });
} else {
    server.get('/', (request, response) => {
        const store = createStore(reducers, middlewareParam);
        const appNode = `
            <main id="bd">
                <noscript>
                    You need to enable JavaScript to use this application!
                </noscript>
                <div id="root">__REACT__</div>
            </main>
            <script>var initialApplicationData = __INITIAL_STATE__;</script>`;

        store.dispatch(initialLoadServerData(request.body));

        response.send(
            appNode.replace(
                // '__REACT__', ReactDOMServer.renderToString( // USE 'hydrate' ON CLIENT
                '__REACT__', ReactDOMServer.renderToStaticMarkup( // USE 'render' ON CLIENT
                    <Provider store={store}><MyApp /></Provider>
                )
            ).replace(
                // JSON.stringify(store.getState()).replace(/</g, '\\u003c')
                '__INITIAL_STATE__', JSON.stringify(store.getState())
            )
        );
    });
}

server.use(express.static(__dirname));

const DEFAULT_PORT = ENV === 'development' ? pkg.config.devPort : pkg.config.port;
const expressServer = server.listen(DEFAULT_PORT, () => {
    console.log(`⚡⚡⚡ Server now listening on ${DEFAULT_PORT}`);
});

if (ENV === 'development') {
    // cleans up server before restarting it
    process.on('uncaughtException', () => {
        expressServer.close();
    });
    process.on('SIGTERM', () => {
        expressServer.close();
    });
}