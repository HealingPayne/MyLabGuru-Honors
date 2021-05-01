import * as ActionTypes from './ActionTypes';

export const about = (state = {
    isLoading: true,
    errMess: null,
    about: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ABOUT:
            return { ...state, isLoading: false, errMess: null, about: action.payload };
        case ActionTypes.ABOUT_LOADING: 
            return { ...state, isLoading: true, errMess: null, about: []};
        case ActionTypes.ABOUT_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        default:
            return state;
    }
};