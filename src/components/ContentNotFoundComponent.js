import React from 'react';
import { FadeTransform } from 'react-animation-components';

function ContentNotFound(props) {
    const titleStyle = {
        color: 'rebeccapurple',
        textShadow: '1px 1px 1px gray'
    }
    const imageStyle = {
        width: '100px',
        borderRadius: '10px',
        boxShadow: '2px 2px 2px gray'

    }
    return (
        <FadeTransform in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-25%)'
            }}>
            <section style={{ height: '600px' }}>
                <div className="mt-3 w-75 mx-auto text-center border shadow py-4" style={{ borderRadius: '20px' }}  >
                    <h4 className=' mb-3 pb-3 border-bottom' style={titleStyle}>{props.content}</h4>
                    <img src='/assets/images/logo.jpg' className='mt-1' style={imageStyle} />
                </div>
            </section>
        </FadeTransform>
    );
}
export default ContentNotFound;