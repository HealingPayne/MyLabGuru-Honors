import * as ActionTypes from './ActionTypes';

export const concepts = (state = {
    isLoading: false,
    errMess: null,
    concepts: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CONCEPTS:
            return { ...state, isLoading: false, errMess: null, concepts: action.payload };

        case ActionTypes.CONCEPTS_LOADING:
            return { ...state, isLoading: true, errMess: null, concepts: [] }

        case ActionTypes.CONCEPTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        case ActionTypes.ADD_CONCEPT:
            const concept = action.payload;
            return { ...state, isLoading: false, errMess: null, concepts: state.concepts.concat(concept) };

        default:
            return state;
    }
};
