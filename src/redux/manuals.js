import * as ActionTypes from './ActionTypes';

export const manuals = (state = {
    isLoading: true,
    errMess: null,
    manuals: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MANUALS:
            return { ...state, isLoading: false, errMess: null, manuals: action.payload };
        case ActionTypes.MANUALS_LOADING: 
            return { ...state, isLoading: true,  errMess: null, manuals: []}
        case ActionTypes.MANUALS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        case ActionTypes.ADD_MANUAL:
            const manual = action.payload;
            return { ...state, isLoading: false, errMess: null, manuals: state.manuals.concat(manual) };
        default:
            return state;
    }
};