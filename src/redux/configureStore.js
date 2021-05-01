import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//Reducers
import {manuals} from './manuals';
import {authors} from './authors';
import {clients} from './clients';
import {experience} from './experience';
import {education} from './education';
import {about} from './about';
import {comments} from './comments';
import {concepts} from './concepts';
import {InitialFeedback} from './forms'
import { createForms } from 'react-redux-form';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            manuals,
            concepts,
            authors,
            clients,
            education,
            experience,
            about,
            comments,
            ...createForms({
                feedbackAddManualForm: InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}