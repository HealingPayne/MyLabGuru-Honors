import React from 'react';

function ManualDetailsInfo(props) {
    console.log(props.manual.longTitle);
    const productText = {
        fontSize: '90%'
    }
    const imageStyle = {
        width: '100%',
        maxWidth: '200px',
        boxShadow: '5px 5px 5px gray',
        zIndex: '0',
        marginTop: '20px'
    }
    const titleStyle = {
        fontSize: '110%',
        color: 'rebeccapurple'
    }
    return (
        <section className='row border-bottom pb-3'>
            <div className='col-md-4 text-center mt-0'>
                <img src={props.manual.image} style={imageStyle} />
            </div>
            <div className='col-md'>
                <p className='font-weight-bold mt-2 mb-1' style={titleStyle}>{props.manual.longTitle}</p>
                <p className='productText mr-4 pr-2' style={productText}>{props.manual.longDescription} 
                    <strong><em> These Labs will compliment any {props.manual.shortTitle} reference book.</em></strong></p>
            </div>
        </section>
    );
}
export default ManualDetailsInfo