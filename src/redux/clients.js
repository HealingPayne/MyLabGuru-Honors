import * as ActionTypes from './ActionTypes';

export const clients = (state = {
    isLoading: true,
    errMess: null,
    clients: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CLIENTS:
            return { ...state, isLoading: false, errMess: null, clients: action.payload };
        case ActionTypes.CLIENTS_LOADING:
            return { ...state, isLoading: true, errMess: null, clients: [] }
        case ActionTypes.CLIENTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        default:
            return state;
    }
};