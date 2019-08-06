import {
    INITIAL_CLIENT_DATA_LOAD,
    INITIAL_SERVER_DATA_LOAD
} from '../actions/initialState';

export default (state = {}, action) => {
    switch (action.type) {
        case INITIAL_SERVER_DATA_LOAD: {
            return {
                ...action.payload
            };
        }
        case INITIAL_CLIENT_DATA_LOAD: {
            return {
                ...action.payload.appData,
            };
        }
        default:
            return state;
    }
};
