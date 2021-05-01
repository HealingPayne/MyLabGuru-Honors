import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

function FreeSample() {
    const imageStyle = {
        width: '100%',
        maxWidth: '180px',
        border: '0px solid gray',
        boxShadow: '5px 5px 30px gray',
        zIndex: '0',
    }
    const titleStyle = {
        fontSize: '125%',
        color: 'rebeccapurple'
    }
    const styleContent = {
        backgroundColor: 'rgba(0,0,0,.03)',
        border: '1px solid lightgray',
        margin: '10px 30px',
        padding: '20px 0',
        borderRadius: '20px',
        boxShadow: '2px 2px 2px gray'
    }
    return (

        <article className='container' style={{height:"600px"}}>
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(25%)'
                }}>
                <section className='text-center'>
                    <figure className='mt-4'>
                        <img src='/assets/images/LABS GURU-Samples.jpg' alt='Free Sample'
                            style={imageStyle} className=''/>
                        <figcaption className='text-center font-weight-bold mt-2' style={titleStyle}>Free Lab Samples</figcaption>
                    </figure>
                    <ModalDownload />
                </section>
            </FadeTransform>

            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateX(50%)'
                }}>
                <div style={styleContent}>
                    <p className=' mt-1 mx-5 productText font-italic' >
                        In this Manual you will get a free sampler of our Course Labs. Each Lab in this manual represents one of our overall manuals and gives you the Developer a look at our approach to an effective learning solution. You will see that each manual is rich with color and photo enhancements providing a better approach for an ultimate step-by-step experience. In this "Free Samples" manual, supplemental files are NOT included. This book will be updated as we create new Lab manuals.
                    </p>
                </div>
            </FadeTransform>
        </article>
    );
}
export default FreeSample;

class ModalDownload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);

    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    render() {
        const styleImage = {
            width: '150px',
            boxShadow: '3px 3px 3px gray'
        }
        return (
            <React.Fragment>
                <a onClick={this.toggleModal}
                    className="btn order-button mb-2" style={{ width: '250px' }}>
                    Download Free Sample
                </a>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Download Free-Samples Manual?</ModalHeader>
                    <ModalBody>
                        <div className='row text-center border-bottom pb-2 mb-3'>
                            <div className='col-6 text-secondary'>
                                <img src='/assets/images/Labs Guru-Samples.jpg' style={styleImage} />
                            </div>
                            <div className='col-6 mt-4' >
                                <button type='button' className='btn modalAnchor mb-3' onClick={this.toggleModal}>
                                    Download Now
                                </button>

                                <button type='button' className='btn modalButton ' onClick={this.toggleModal}>
                                    Cancel
                                </button>
                            </div>
                        </div>

                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}
{/* 
    <a href='/assets/samples/SampleManual.pdf' download className="btn modalAnchor  mb-3" onClick={this.toggleModal}>
     Download Now
    </a> 
*/}