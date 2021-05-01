import React from 'react';
import ContentNotFound from './ContentNotFoundComponent';

function ManualDetailsSample(props) {
    const titleStyle = {
        fontSize: '110%',
        color: 'rebeccapurple'
    }
    if (props.manual.sampleImage) {
        return (
            <>
                <p className='font-weight-bold' style={titleStyle}>{props.manual.shortTitle} Lab Example</p>
                <img src={props.manual.sampleImage} className='w-75 shadow-lg mt-1' />
            </>
        );
    } else {
        return (
            <ContentNotFound content="No Sample available" />
        )
    }
}
export default ManualDetailsSample;