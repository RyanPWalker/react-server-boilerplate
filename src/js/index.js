import { render } from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import MyApp from './App';
import { initialLoadClientData } from './redux/actions/initialState';
import '../less/main.less';

const state = window.initialApplicationData;
const store = configureStore();
store.dispatch(initialLoadClientData(state));

const css = 'text-shadow: -1px -1px #ff6000, 1px 1px orange, 3px 2px yellow, 5px 3px yellowgreen, 7px 4px green, 9px 5px turquoise, 11px 6px #34b2ff; 13px 7px #9c40e0; font-size: 60px; color: rgb(203, 23, 47);';
console.log('%c server-boilerplate ', css);

/*
 ______     __  __     ______     __   __     ______
/\  == \   /\ \_\ \   /\  __ \   /\ "-.\ \   /\  __ \
\ \  __<   \ \____ \  \ \  __ \  \ \ \-.  \  \ \ \/\ \
 \ \_\ \_\  \/\_____\  \ \_\ \_\  \ \_\\"\_\  \ \_____\
  \/_/ /_/   \/_____/   \/_/\/_/   \/_/ \/_/   \/_____/

*/

render(
    <Provider store={store}>
        <MyApp />
    </Provider>,
    document.getElementById('server-boilerplate-root')
);
