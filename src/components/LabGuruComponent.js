import React from 'react';
import AuthorBio from './AuthorBioComponent';
import AuthorClient from './AuthorClientComponent';
import AuthorExperience from './AuthorExperienceComponent';
import AuthorEducation from './AuthorEducationComponent';
import { FadeTransform } from 'react-animation-components';

function LabGuru(props) {
    return (
        <section className='container'>
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateX(50%)'
                }}>
                <AuthorBio author={props.author} />
            </FadeTransform>
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateX(-25%)'
                }}>
                <section className='row mx-4 mt-2 mt-3'>
                    <div className="col-md-6">
                        <AuthorClient clients={props.clients} />
                    </div>
                    <div className='col-md-6'>
                        <AuthorExperience experience={props.experience} />
                    </div>
                </section>
                <section className='row mx-4 mt-2 mt-3'>
                    <div className='col-md'>
                        <AuthorEducation education={props.education} />
                    </div>
                </section>
            </FadeTransform>
        </section>
    );
}
export default LabGuru;