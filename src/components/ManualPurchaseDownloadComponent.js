import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function ManualPurchaseDownload(props) {
    const titleStyle = {
        fontSize: '110%',
        color: 'rebeccapurple'
    }
    return (
        <section className='' >
            <p className='productTitle font-weight-bold' style={titleStyle}>Order Here</p>
            <div>
                <ModalPurchase manual={props.manual} />
            </div>
            <div className="labs-logo my-3 mx-auto">
                <img src="/assets/images/Flask.png" style={{ width: '100%' }} />
            </div>
            <div className='mb-3'>
                <ModalDownload manual={props.manual} />
                <br />
                <span id='labelDownload' className='ml-1'>Lab Supplimental Files</span>
            </div>
        </section>
    );
}
export default ManualPurchaseDownload;

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
            width: '125px',
            boxShadow: '3px 3px 3px gray'
        }
        return (
            <>
                <a onClick={this.toggleModal}
                    className="btn mb-1"
                    style={{ width: '155px' }}>
                    Download Files
                </a>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Download {this.props.manual.shortTitle} Lab Files?</ModalHeader>
                    <ModalBody>
                        <div className='row text-center border-bottom pb-2 mb-3'>
                            <div className='col-6 text-secondary'>
                                <img src={this.props.manual.image} style={styleImage} />
                            </div>
                            <div className='col-6 mt-4'>
                                {/* <a href={this.props.manual.labFiles} download className="btn modalAnchor mb-3" onClick={this.toggleModal}>
                                    Download Files
                                </a> */}
                                <button type='button' className='btn modalAnchor mb-3' onClick={this.toggleModal}>
                                    Download Files
                                </button>
                                <button type='button' className='btn modalButton' onClick={this.toggleModal}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

class ModalPurchase extends Component {
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
            width: '125px',
            boxShadow: '3px 3px 3px gray'
        }
        return (
            <>
                <a onClick={this.toggleModal}
                    className="btn mb-0"
                    style={{ width: '155px' }}>
                    Buy Digital Manual
                </a>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Purchase {this.props.manual.shortTitle} Manual?</ModalHeader>
                    <ModalBody>
                        <div className='row  border-bottom pb-2 mb-3'>
                            <div className='col-6 text-secondary text-center'>
                                <img src={this.props.manual.image} style={styleImage} />
                            </div>
                            <div className='col-6 mt-4'>
                                {/* <a href="https://www.vitalsource.com/" className="btn modalAnchor mb-3" onClick={this.toggleModal}>
                                    Purchase Now
                                </a> */}
                                <button type='button' className='btn modalAnchor mb-3' onClick={this.toggleModal}>
                                    Purchase Now
                                </button>
                                <button type='button' className='btn modalButton' onClick={this.toggleModal}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}





