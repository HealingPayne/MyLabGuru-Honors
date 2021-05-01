import React, { Component } from 'react';
import { Button, Label, Row, Col } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form'

import '../styles/page.css';
import { FadeTransform } from 'react-animation-components';

class ManualAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longtitle: '',
            shortTitle: '',
            image: '',
            shortDescription: '',
            longDescription: '',
            sampleImage: '',
            labFiles: '',
            productionDate: '',
            touched: {
                longTitle: false,
                shortTitle: false,
                image: false,
                shortDescription: false,
                longDescription: false,
                sampleImage: false,
                labFiles: false,
                productionDate: false,
            }
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onSubmitHandler(values) {
        this.props.postManual(
            values.shortTitle,
            values.longTitle,
            values.image,
            values.shortDescription,
            values.longDescription,
            values.sampleImage,
            values.labFiles,
            values.productionDate
        );
        console.log('Current state is: ' + JSON.stringify(values));

    }
    render() {
        const required = val => val && val.length;

        const textStyle = {
            color: 'rebeccapurple'
        }
        const formStyle = {
            marginLeft: '50px',
            marginRight: '50px',

        }
        return (
            <article className='container' style={{ fontSize: '80%' }}>
                <section className='mt-3' style={textStyle}>
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <div className='text-center'>
                            <img src="/assets/images/Flask.png" style={{ width: '70px' }} alt="Flask" />
                            {/* <p className='pb-2 mb-1'
                                style={titleStyle}>Lab Manual Add Form</p> */}
                        </div>
                    </FadeTransform>
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(25%)'
                        }}>
                        <Form model='feedbackAddManualForm' onSubmit={values => this.onSubmitHandler(values)}
                            style={formStyle}
                            className=' pt-2'>
                            <Row className='form-group'>
                                <Label htmlFor='shortTitle' md={3} className='mt-2'>Short Title:</Label>
                                <Col md={9}>
                                    <Control.text id='shortTitle' model='.shortTitle' name='shortTitle'
                                        placeHolder='Short Title...'
                                        className='form-control'
                                        style={{ fontSize: '95%' }}
                                        validators={{
                                            required
                                            // minLength: minLength(3),
                                            // maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger ml-2"
                                        style={{ fontSize: '80%' }}
                                        model=".shortTitle"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required'
                                            // minLength: 'Must be at least 3 characters',
                                            // maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='longTitle' md={3} className='mt-2'>Long Title:</Label>
                                <Col md={9}>
                                    <Control.text id='longTitle' model='.longTitle' name='longTitle'
                                        placeHolder='Long Title...'
                                        className='form-control'
                                        style={{ fontSize: '95%' }}
                                        validators={{
                                            required
                                            // minLength: minLength(3),
                                            // maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger ml-2"
                                        style={{ fontSize: '80%' }}
                                        model=".longTitle"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required'
                                            // minLength: 'Must be at least 3 characters',
                                            // maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                           
                            <Row className='form-group'>
                                <Label htmlFor='image' md={3} className='mt-2'>Manual Image:</Label>
                                <Col md={9}>
                                    <Control.text id='image' model='.image' name='image'
                                        placeHolder='/assets/images/'
                                        className='form-control'
                                        style={{ fontSize: '95%' }}
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger ml-2"
                                        style={{ fontSize: '80%' }}
                                        model=".image"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='shortDescription' md={3} className='mt-2'>Short Description:</Label>
                                <Col md={9}>
                                    <Control.textarea rows='3' id='shortDescription' model='.shortDescription' name='shortDescription'
                                        placeHolder='Short Description...'
                                        className='form-control'
                                        style={{ fontSize: '95%' }}
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger ml-2"
                                        style={{ fontSize: '80%' }}
                                        model=".shortDescription"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='longDescription' md={3} className='mt-2'>Long Description:</Label>
                                <Col md={9}>
                                    <Control.textarea rows='3' id='longDescription' model='.longDescription' name='longDescription'
                                        placeHolder='Long Description...'
                                        className='form-control'
                                        style={{ fontSize: '95%' }}
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger ml-2"
                                        style={{ fontSize: '80%' }}
                                        model=".longDescription"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='sampleImage' md={3} className='mt-2'>Sample Image:</Label>
                                <Col md={9}>
                                    <Control.text id='sampleImage' model='.sampleImage' name='sampleImage'
                                        placeHolder='/assets/samples/'
                                        className='form-control'
                                        style={{ fontSize: '95%' }}
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger ml-2"
                                        style={{ fontSize: '80%' }}
                                        model=".sampleImage"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='labFiles' md={3} className='mt-2'>Lab Files:</Label>
                                <Col md={9}>
                                    <Control.text id='labFiles' model='.labFiles' name='labFiles'
                                        placeHolder='/assets/samples/'
                                        className='form-control'
                                        style={{ fontSize: '95%' }}
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger ml-2"
                                        style={{ fontSize: '80%' }}
                                        model=".labFiles"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='productionDate' md={3} className='mt-2'>Production Date:</Label>
                                <Col md={9}>
                                    <Control.text id='productionDate' model='.productionDate' name='productionDate'
                                        placeHolder='Production Date...'
                                        className='form-control'
                                        style={{ fontSize: '95%' }}
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger ml-2"
                                        style={{ fontSize: '80%' }}
                                        model=".productionDate"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group text-center'>
                                <Col md={{ size: 9, offset: 3 }}>
                                    <button type='submit'
                                        className='btn btn-block w-100 modalAnchor'
                                        style={{ fontSize: '95%' }}>
                                        Add Manual
                                        </button>
                                </Col>
                                <Col md={{ size: 9, offset: 3 }}>
                                    <Button type='reset'
                                        className='btn btn-block w-100 modalButton'
                                        style={{ fontSize: '95%' }}>
                                        Cancel
                                        </Button>
                                </Col>
                            </Row>
                        </Form>
                    </FadeTransform>
                </section>

            </article>
        )
    }
}
export default ManualAdd