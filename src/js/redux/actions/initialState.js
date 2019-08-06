export const INITIAL_SERVER_DATA_LOAD = 'INITIAL_SERVER_DATA_LOAD';
export const INITIAL_CLIENT_DATA_LOAD = 'INITIAL_CLIENT_DATA_LOAD';

export const initialLoadServerData = contextObject => ({
    type: INITIAL_SERVER_DATA_LOAD,
    payload: contextObject
});

export const initialLoadClientData = serializedState => ({
    type: INITIAL_CLIENT_DATA_LOAD,
    payload: serializedState
});
