import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

//===============================================================
// Manuals
//===============================================================
export const fetchManuals = () => dispatch => {
    //dispatch(manualsLoading());
    return fetch(baseUrl + 'manuals')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(manuals => dispatch(addManuals(manuals)))
        .catch(error => dispatch(manualsFailed(error.message)));
};
export const manualsLoading = () => ({
    type: ActionTypes.MANUALS_LOADING
});
export const addManuals = manuals => ({
    type: ActionTypes.ADD_MANUALS,
    payload: manuals
});
export const manualsFailed = errMess => ({
    type: ActionTypes.MANUALS_FAILED,
    payload: errMess
});
export const postManual = (
    longTitle, shortTitle, image, 
    shortDescription, longDescription, 
    sampleImage, labFiles, productionDate) => dispatch => {
    const newManual = {
        longTitle: longTitle,
        shortTitle: shortTitle,
        image: image,
        shortDescription: shortDescription,
        longDescription: longDescription,
        sampleImage: sampleImage,
        labFiles: labFiles,
        productionDate: productionDate
    };

    return fetch(baseUrl + 'manuals', {
        method: "POST",
        body: JSON.stringify(newManual),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addManual(response)))
        .catch(error => {
            console.log('post manual', error.message);
            alert('Your manual could not be posted\nError: ' + error.message);
        });
};
export const addManual = manual => ({
    type: ActionTypes.ADD_MANUAL,
    payload: manual
});
//===============================================================
// Authors
//===============================================================
export const fetchAuthors = () => dispatch => {
    return fetch(baseUrl + 'authors')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(authors => dispatch(addAuthors(authors)))
        .catch(error => dispatch(authorsFailed(error.message)));
};
export const addAuthors = authors => ({
    type: ActionTypes.ADD_AUTHORS,
    payload: authors
});
export const authorsLoading = () => ({
    type: ActionTypes.AUTHORS_LOADING
});
export const authorsFailed = errMess => ({
    type: ActionTypes.AUTHORS_FAILED,
    payload: errMess
});

//===============================================================
// Clients
//===============================================================
export const fetchClients = () => dispatch => {
    return fetch(baseUrl + 'clients')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(clients => dispatch(addClients(clients)))
        .catch(error => dispatch(clientsFailed(error.message)));
};
export const addClients = clients => ({
    type: ActionTypes.ADD_CLIENTS,
    payload: clients
});
export const clientsLoading = () => ({
    type: ActionTypes.CLIENTS_LOADING
});
export const clientsFailed = errMess => ({
    type: ActionTypes.CLIENTS_FAILED,
    payload: errMess
});

//===============================================================
// Experience
//===============================================================
export const fetchExperience = () => dispatch => {
    return fetch(baseUrl + 'experience')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(experience => dispatch(addExperience(experience)))
        .catch(error => dispatch(experienceFailed(error.message)));
};
export const addExperience = experience => ({
    type: ActionTypes.ADD_EXPERIENCE,
    payload: experience
});
export const experienceLoading = () => ({
    type: ActionTypes.EXPERIENCE_LOADING
});
export const experienceFailed = errMess => ({
    type: ActionTypes.EXPERIENCE_FAILED,
    payload: errMess
});

//===============================================================
// Education
//===============================================================
export const fetchEducation = () => dispatch => {
    return fetch(baseUrl + 'education')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(education => dispatch(addEducation(education)))
        .catch(error => dispatch(educationFailed(error.message)));
};
export const addEducation = education => ({
    type: ActionTypes.ADD_EDUCATION,
    payload: education
});
export const educationLoading = () => ({
    type: ActionTypes.EDUCATION_LOADING
});
export const educationFailed = errMess => ({
    type: ActionTypes.EDUCATION_FAILED,
    payload: errMess
});

//===============================================================
// About
//===============================================================
export const fetchAbout = () => dispatch => {
    return fetch(baseUrl + 'about')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(about => dispatch(addAbout(about)))
        .catch(error => dispatch(aboutFailed(error.message)));
};
export const addAbout = about => ({
    type: ActionTypes.ADD_ABOUT,
    payload: about
});
export const aboutFailed = errMess => ({
    type: ActionTypes.ABOUT_FAILED,
    payload: errMess
});
export const aboutLoading = () => ({
    type: ActionTypes.ABOUT_LOADING,

});

//===============================================================
// Comments
//===============================================================
export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};
export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});
export const postComment = (first, last, message) => dispatch => {
    const newComment = {
        first: first,
        last: last,
        message: message
    };

    let dateTime = new Date();
    let dt = (dateTime.getMonth() + 1) + '/' + dateTime.getDate() + '/' + dateTime.getFullYear() + ' - ' + dateTime.getHours() + ':' + dateTime.getMinutes() + ':' + dateTime.getSeconds();
    newComment.dateTime = dt;

    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('post comment', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        });
};
export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});
export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});
export const commentsLoading = () => ({
    type: ActionTypes.COMMENTS_LOADING
});

//===============================================================
// Concepts
//===============================================================
export const fetchConcepts = () => dispatch => {
    return fetch(baseUrl + 'concepts')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(concepts => dispatch(addConcepts(concepts)))
        .catch(error => dispatch(conceptsFailed(error.message)));
};
export const conceptsLoading = () => ({
    type: ActionTypes.CONCEPTS_LOADING
});
export const addConcepts = concepts => ({
    type: ActionTypes.ADD_CONCEPTS,
    payload: concepts
});
export const conceptsFailed = errMess => ({
    type: ActionTypes.CONCEPTS_FAILED,
    payload: errMess
});
export const postConcept = (manualId, name) => dispatch => {
        const newConcept = {
            manualId: manualId,
            name: name
        };

        return fetch(baseUrl + 'concepts', {
            method: "POST",
            body: JSON.stringify(newConcept),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
                error => { throw error; }
            )
            .then(response => response.json())
            .then(response => dispatch(addConcept(response)))
            .catch(error => {
                console.log('post concept', error.message);
                alert('Your concept could not be posted\nError: ' + error.message);
            });
    };
export const addConcept = concept => ({
    type: ActionTypes.ADD_CONCEPT,
    payload: concept
});

