import React from 'react';

export const Loading = () => {
    return (
        <div className="container">
            <div className="col mt-5 text-center text-primary" style={{ height: '500px' }}>
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
                <h5 className='mt-2' style={{ textShadow: '1px 1px 1px gray' }}>Loading Content...</h5>
            </div>
        </div>
    );
};