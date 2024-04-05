import express from 'express';
import React from 'react';
import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import bodyParser from 'body-parser';

import reducers from '../src/js/redux/reducers';
import MyApp from '../src/js/App';
import pkg from '../package.json';
import { initialLoadServerData } from '../src/js/redux/actions/initialState';
import fakeData from './fakeData';

const ENV = process.env.NODE_ENV;

const server = express();

if (ENV === 'development') {
    server.use('/dist', express.static('dist'));
}

server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

server.get('/', (request, response) => {
    // create new store for each request
    // add initial data from reducers here
    const store = configureStore({reducer: reducers});
    store.dispatch(initialLoadServerData(fakeData));

    const appStyles = 'client.min.css'
    const appScript = 'client.min.js'

    // WITH header and footer
    const htmlPage = fs.readFileSync(path.join(__dirname, '../src/local/index.html')).toString();

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
        .replace(
            '__CSS__', `<link rel="stylesheet" href="${appStyles}">`
        ).replace(
            '__JS__', `<script src="${appScript}" defer></script>`
        )
    );
});

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