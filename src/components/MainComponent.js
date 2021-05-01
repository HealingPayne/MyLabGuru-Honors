import React, { Component } from 'react';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import '../styles/page.css';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import LabGuru from './LabGuruComponent';
import ManualDetails from './ManualDetailsComponent'
import AboutUs from './AboutUsComponent';
import VitalSource from './VitalSourceComponent';
import FreeSample from './FreeSampleComponent';
import Comments from './CommentsComponent';
import ContentNotFound from './ContentNotFoundComponent';
import ComingSoon from './ComingSoonComponent';
import { Error } from './ErrorComponent';
import { Loading } from './LoadingComponent';
import Admin from './AdminComponent';
import ManualAdd from './ManualAddComponent';
import ManualEdit from './ManualEditComponent';
import ManualConceptsAdd from './ManualConceptsAddComponent';
import ManualConceptsEdit from './ManualConceptsEditComponent';

import {
    postManual, postConcept, postComment,
    fetchManuals, fetchConcepts, fetchAbout, fetchComments,
    fetchAuthors, fetchClients, fetchEducation, fetchExperience
} from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        manuals: state.manuals,
        concepts: state.concepts,
        authors: state.authors,
        clients: state.clients,
        education: state.education,
        experience: state.experience,
        about: state.about,
        comments: state.comments
    }
}
const mapDispatchToProps = {
    fetchManuals: fetchManuals,
    fetchConcepts: fetchConcepts,
    fetchAuthors: fetchAuthors,
    fetchClients: fetchClients,
    fetchEducation: fetchEducation,
    fetchExperience: fetchExperience,
    fetchAbout: fetchAbout,
    fetchComments: fetchComments,
    postComment: (first, last, message) => (postComment(first, last, message)),
    postManual: (longTitle, shortTitle, image, shortDescription, longDescription, sampleImage, labFiles, productionDate) =>
        (postManual(longTitle, shortTitle, image, shortDescription, longDescription, sampleImage, labFiles, productionDate)),
    postConcept: (manualId, name) => (postConcept(manualId, name)),
}

class Main extends Component {
    componentDidMount() {
        this.props.fetchManuals();
        this.props.fetchConcepts();
        this.props.fetchAuthors();
        this.props.fetchClients();
        this.props.fetchEducation();
        this.props.fetchExperience();
        this.props.fetchAbout();
        this.props.fetchComments();
    }

    render() {
        const HomePage = () => {
            if (this.props.manuals.isLoading) {
                return (
                    <Loading />
                );
            }
            if (this.props.manuals.errMess) {
                return (
                    <Error />
                );
            }
            return (
                <Home manuals={this.props.manuals.manuals} />
            );
        }

        const GetManualDetails = ({ match }) => {
            if (this.props.manuals.isLoading) {
                return (
                    <Loading />
                );
            }
            if (this.props.manuals.errMess) {
                return (
                    <Error />
                );
            }
            console.log(this.props.manuals.manuals.length)
            const total = this.props.manuals.manuals.length;
            //const manual = this.props.manuals.manuals.filter(manual => manual._id === match.params.id)[0];
            const manual = this.props.manuals.manuals.filter(manual => manual.id === +match.params.id)[0];
            const concepts = this.props.concepts.concepts.filter(concepts => concepts.manualId === +match.params.id);
            // return (
            //     <ManualDetails manual={manual} concepts={concepts} />
            // );
            if (manual) {
                if (manual.id <= total)
                    return (
                        <ManualDetails manual={manual} concepts={concepts} />
                    );
                else if (manual.id > total)
                    return (
                        // <ContentNotFound content="Manual is Unavailable" />
                        <ComingSoon manual={manual} />
                    );

            } else {
                return (
                    <ContentNotFound content="Manual is NOT Found" />
                );
            }
        }
        const GetLabGuru = ({ match }) => {
            if (this.props.authors.isLoading) {
                return (
                    <Loading />
                );
            }
            if (this.props.authors.errMess) {
                return (
                    <Error />
                );
            }
            // console.log(this.props.authors.authors.length)
            //const author = this.props.authors.authors.filter(author => author._id === match.params.id)[0];
            const author = this.props.authors.authors.filter(author => author.id === +match.params.id)[0];
            const clients = this.props.clients.clients.filter(clients => clients.authorId == +match.params.id);
            const education = this.props.education.education.filter(education => education.authorId == +match.params.id);
            const experience = this.props.experience.experience.filter(experience => experience.authorId == +match.params.id);
            if (author)
                return (
                    <LabGuru author={author} clients={clients}
                        experience={experience} education={education} />
                );
            else
                return (
                    <ContentNotFound content="Author is NOT Found" />
                );
        }
        const GetAboutUs = () => {
            if (this.props.about.isLoading) {
                return (
                    <Loading />
                );
            }
            if (this.props.about.errMess) {
                return (
                    <Error />
                );
            }
            return (
                <AboutUs about={this.props.about.about[0]} />
            );
        }
        const GetComments = () => {
            if (this.props.about.isLoading) {
                return (
                    <Loading />
                );
            }
            if (this.props.about.errMess) {
                return (
                    <Error />
                );
            }
            return (
                <Comments comments={this.props.comments.comments}
                    postComment={this.props.postComment}
                    errMess={this.props.comments.errMess}
                    isLoading={this.props.comments.isLoading} />
            );
        }
        const GetAdmin = () => {
            if (window.login) {
                return (
                    <Admin manuals={this.props.manuals.manuals} />
                );
            } else {
                return (
                    <ContentNotFound content='Administrators Only...' />
                )
            }
        }
        const GetAddManual = () => {
            if (window.login) {
                return (
                    <ManualAdd postManual={this.props.postManual} />
                );
            } else {
                return (
                    <ContentNotFound content='Only Administrators...' />
                )
            }
        }
        const GetAddConcepts = () => {
            if (window.login) {
                return (
                    <ManualConceptsAdd manuals={this.props.manuals.manuals}
                        concepts={this.props.concepts.concepts}
                        postConcept={this.props.postConcept} />
                );
            } else {
                return (
                    <ContentNotFound content='Only Administrators...' />
                )
            }
        }
        const GetEditManual = () => {
            if (window.login) {
                return (
                    <ManualEdit manuals={this.props.manuals.manuals} />
                );
            } else {
                return (
                    <ContentNotFound content='Only Administrators...' />
                )
            }
        }
        const GetEditConcepts = () => {
            if (window.login) {
                return (
                    <ManualConceptsEdit manuals={this.props.manuals.manuals}
                        concepts={this.props.concepts.concepts} />
                );
            } else {
                return (
                    <ManualConceptsEdit content='Only Administrators...' />
                )
            }
        }
        const GetVitalSource = () => {
            return (
                <VitalSource />
            );
        }
        const GetFreeSample = () => {
            return (
                <FreeSample />
            );
        }
        return (
            <React.Fragment>
                <article id='mainContent'
                    className='my-3 pb-5 bg-white'>
                    <Header />

                    <Switch>
                        <Route exact path='/home' component={HomePage} />
                        <Route path='/labguru/:id' component={GetLabGuru} />
                        <Route path='/details/:id' component={GetManualDetails} />
                        <Route exact path='/aboutus' component={GetAboutUs} />
                        <Route exact path='/comments' component={GetComments} />
                        <Route exact path='/vitalsource' component={GetVitalSource} />
                        <Route exact path='/freesample' component={GetFreeSample} />
                        <Route exact path='/admin' component={GetAdmin} />
                        <Route exact path='/addmanual' component={GetAddManual} />
                        <Route exact path='/editmanual' component={GetEditManual} />
                        <Route exact path='/addconcepts' component={GetAddConcepts} />
                        <Route exact path='/editconcepts' component={GetEditConcepts} />
                        <Redirect to='/home' />
                    </Switch>
                </article>
            </React.Fragment>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));