import React, { Component } from 'react';

import ManualDetailsInfo from './ManualDetailsInfoComponent';
import ManualDetailsConcepts from './ManualDetailsConceptsComponent';
import ManualPurchaseDownload from './ManualPurchaseDownloadComponent';
import ManualDetailsSample from './ManualDetailsSampleComponent';
// import ComingSoon from './ComingSoonComponent';
import { FadeTransform } from 'react-animation-components';
import ContentNotFound from './ContentNotFoundComponent';
import CommingSoon from './ComingSoonComponent'
;
function ManualDetails(props) {
    const titleStyle = {
        color: 'rebeccapurple',
        textShadow: '1px 1px 1px gray'
    }
    const RenderDetails = ({manual}) => {
        //console.log((props.concepts.length) ? ('true') : ('false'));
        return (
            <div className='container'>
                <FadeTransform in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(50%)'
                    }}>
                    <ManualDetailsInfo manual={props.manual} />
                </FadeTransform>
                <section className='row border-bottom mt-2'>
                    <div className='col-md '>
                        <FadeTransform in
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(50%)'
                            }}>
                            <ManualDetailsConcepts concepts={props.concepts} />
                        </FadeTransform>
                    </div>
                    <div className='col-md-5 text-center'>
                        <FadeTransform in
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(50%)'
                            }}>
                            <ManualPurchaseDownload manual={props.manual} />
                        </FadeTransform>
                    </div>
                </section>
                <section className='row'>
                    <div className='col text-center mt-2'>
                        <FadeTransform in
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(50%)'
                            }}>
                            <ManualDetailsSample manual={props.manual} />
                        </FadeTransform>
                    </div>
                </section>
            </div>
        );

    }
    
    //Check to see if Concepts are there...
    if (props.concepts.length) {
        return (
            <div className='container-fluid ml-2 my-3' >
                <RenderDetails manual={props.manual} />
            </div>
        );
    }
    else {
        return (
            <CommingSoon manual={props.manual} />
        )
    }
}
export default ManualDetails;
