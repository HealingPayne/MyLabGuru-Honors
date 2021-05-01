import React from 'react';
import { FadeTransform } from 'react-animation-components';

function ComingSoon(props) {
    const titleStyle = {
        color: 'rebeccapurple',
        textShadow: '1px 1px 1px gray'
    }
    const imageStyle = {
        boxShadow: '5px 5px 5px gray',
        width: '200px'
    }
    return (
        <section style={{ height: '500px' }}>
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(50%)'
                }}>
                <div className="mt-3 w-75 mx-auto text-center border shadow py-4" style={{ borderRadius: '20px' }}  >
                    <h4 className='mb-1' style={titleStyle}>{props.manual.longTitle} - Coming Soon! </h4>
                    <p className='text-danger mb-1'><small>expected: {props.manual.productionDate}</small></p>
                    <img src={props.manual.image} style={imageStyle} className='mt-1' />
                </div>
            </FadeTransform>
        </section>
    );
}
export default ComingSoon;

