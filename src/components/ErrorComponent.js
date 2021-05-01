import React from 'react';
import { FadeTransform } from 'react-animation-components';
export const Error = () => {
    return (
        <FadeTransform in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
            <div className="container">
                <div className="row mt-5" style={{ height: '500px' }}>
                    <div className="col text-center mx-5" style={{ textShadow: '1px 1px 1px gray' }}>
                        <h4 className='text-danger border-top pt-3'>An Error has Occurred</h4>
                        <h5 className='text-info border-bottom pb-3'>We are working on the problem...</h5>
                    </div>
                </div>
            </div>
        </FadeTransform>
    );
};