import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export default function _configureStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
