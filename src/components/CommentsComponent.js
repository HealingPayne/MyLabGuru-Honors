import React, { Component } from 'react';
import { Button, Label, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form'
import { Error } from './ErrorComponent';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

class Comments extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.isLoading) {
            return (
                <Loading />
            );
        }
        if (this.props.errMess) {
            return (
                <Error />
            );
        }
        const newComments = this.props.comments.reverse();
        //console.log(this.props.comments.length);
        const getComments = newComments.map(message => {
            return (
                <FadeTransform in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-200%)',
                    }}>
                    <small key={message.id} className='mb-1'>
                        <div className='ml-2'>
                            <span className='text-danger '>{message.dateTime}</span> {' - '}
                            <span className='text-dark'>{message.first} {message.last}</span>
                        </div>
                        <div>
                            <span className='ml-2 text-info'>-- {message.message}</span>
                        </div>
                    </small>
                </FadeTransform>
            );
        });
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'translateY(50px)'
                }}>
                <section className='container' style={{ height: '600px' }}>
                    <section className='mt-3 mx-5 p-4 text-secondary border' style={{ backgroundColor: 'rgba(8, 71, 245, 0.1)' }}>
                        <ModalComment postComment={this.props.postComment} />
                    </section>
                    <section className='mx-5 pl-2 pr-1 pb-2 border' style={{ fontSize: '90%' }}>
                        <div className='text-secondary text-center' style={{ fontSize: '130%', fontWeight: 'bold' }}>
                            Latest Comments
                    </div>
                        <hr className='my-1' />
                        <div style={styleComments}>
                            {getComments}
                        </div>
                    </section>
                </section>
            </FadeTransform>
        );
    }
}
const styleComments = {
    padding: '10px', fontSize: '90%',
    height: '250px', overflow: 'auto'
}
export default Comments;

class ModalComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            message: '',
            touched: {
                firstName: false,
                lastName: false,
                message: false
            },
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onSubmitHandler(values) {
        this.toggleModal();
        this.props.postComment(values.firstName, values.lastName, values.message);

        console.log('Current state is: ' + JSON.stringify(values));
        const obj = JSON.parse(JSON.stringify(values));
        console.log(`${obj.firstName} ${obj.lastName} sent: ${obj.message}`);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    render() {
        const required = val => val && val.length;
        const maxLength = len => val => !val || (val.length <= len); //1st function takes max len and 2nd take the value
        const minLength = len => val => val && (val.length >= len);
        //const isNumber = val => !isNaN(+val);
        //const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

        return (
            <section className=''>
                <button id='' onClick={this.toggleModal}
                    className="btn w-100">
                    <i className='fa fa-pencil fa-lg'></i>{' '}
                    Add Comment
                </button>
                <section className='px-0'>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>
                            Enter Comment
                        </ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={values => this.onSubmitHandler(values)}>
                                <Row className='form-group'>
                                    <Label htmlFor='firstName' md={3}>First Name:</Label>
                                    <Col md={9}>
                                        <Control.text id='firstName' model='.firstName' name='firstName'
                                            placeholder='First Name...'
                                            className='form-control'
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger ml-2"
                                            style={{ fontSize: '80%' }}
                                            model=".firstName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor='lastName' md={3}>Last Name:</Label>
                                    <Col md={9}>
                                        <Control.text id='lastName' model='.lastName' name='lastName'
                                            placeholder='Last Name...'
                                            className='form-control'
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger ml-2"
                                            style={{ fontSize: '80%' }}
                                            model=".lastName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>

                                <Row className='form-group'>
                                    <Label htmlFor='message' md={3}>Comment:</Label>
                                    <Col md={9}>
                                        <Control.textarea rows='3' id='message' model='.message' name='message'
                                            placeholder='Enter a comment...'
                                            className='form-control'
                                            validators={{
                                                required,
                                                minLength: minLength(5),
                                            }}
                                        />
                                        <Errors
                                            className="text-danger ml-2"
                                            style={{ fontSize: '80%' }}
                                            model=".message"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 5 characters',
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className='form-group text-center'>
                                    <Col md={{ size: 9, offset: 3 }}>
                                        <button type='submit' className='btn btn-block w-100 modalAnchor'>
                                            Save
                                        </button>
                                    </Col>
                                    <Col md={{ size: 9, offset: 3 }}>
                                        <Button type='button' className='btn btn-block w-100 modalButton'
                                            onClick={this.toggleModal}>
                                            Cancel
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </section>
            </section>
        );
    }
}
