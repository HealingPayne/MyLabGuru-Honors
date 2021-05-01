import React from 'react';
import { FadeTransform } from 'react-animation-components';

function AboutUs(props) {
    const styleHeader = {
        // textShadow: '1px 1px 1px gray',
        color: 'rebeccapurple',
        fontWeight: 'bold'
    }
    const styleContent = {
        // textShadow: '1px 1px 1px gray',
        backgroundColor: 'rgba(185, 110, 185, .15)',
        border: '1px solid lightgray',
        margin: '10px 60px',
        padding: '20px 0',
        borderRadius: '20px',
        // boxShadow: '2px 2px 2px gray'
    }

    return (

        <article className='container text-center p-3' style={{ height: '600px' }}>
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateX(50px)'
                    // entryTransform: 'scale(0.5) translateY(-50px)'
                }}>
                <div className='shadow' style={styleContent}>
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50px)'
                            // entryTransform: 'scale(0.5) translateY(-50px)'
                        }}>
                        <section className="row pb-1 mb-1">
                            <div className="col-sm-12">
                                <h5 style={styleHeader}>Mailing Address</h5>
                                <div >
                                    <address>{props.about.address}</address>
                                    <address>{props.about.city}, {props.about.state}  {props.about.zip}</address>
                                    <address>{props.about.country}</address>
                                </div>
                            </div>
                        </section>
                    </FadeTransform>
                    <hr />
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50px)'
                            // entryTransform: 'scale(0.5) translateY(-50px)'
                        }}>
                        <section className='row pb-1 mb-1'>
                            <div className="col-sm-12">
                                <h5 style={styleHeader}>E-Mail</h5>
                                <a href='mailto:supprt@mylabguru.com'>{props.about.email}</a>
                            </div>
                        </section>
                    </FadeTransform>
                    <hr />
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50px)'
                            // entryTransform: 'scale(0.5) translateY(-50px)'
                        }}>
                        <section className='row'>
                            <div className="col-sm-12">
                                <h5 style={styleHeader}>Phone Number</h5>
                                <a href='tel:{props.about.phone}'>{props.about.phone}</a>
                            </div>
                        </section>
                    </FadeTransform>
                </div>
            </FadeTransform>
        </article>

    );
}
export default AboutUs;
