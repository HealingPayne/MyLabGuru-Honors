import * as ActionTypes from './ActionTypes';

export const experience = (state = {
    isLoading: true,
    errMess: null,
    experience: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_EXPERIENCE:
            return { ...state, isLoading: false, errMess: null, experience: action.payload };
        case ActionTypes.EXPERIENCE_LOADING:
            return { ...state, isLoading: true, errMess: null, experience: [] }
        case ActionTypes.EXPERIENCE_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        default:
            return state;
    }
};