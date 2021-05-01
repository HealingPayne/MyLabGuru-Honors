import React, { Component } from 'react';
import '../styles/page.css';
import { Button, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form'
import { FadeTransform } from 'react-animation-components';

class ManualConceptsAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manualSelectId: 1,
            concept: '',
            touched: {
                concept: false
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(values) {
        this.props.postConcept(+this.state.manualSelectId, values.concept);
        console.log(this.state.manualSelectId);
        console.log('Current state is: ' + JSON.stringify(values));

    }
    handleChange(event) {
        this.setState({ manualSelectId: event.target.value });
    }
    render() {
        const formStyle = {
            marginLeft: '45px',
            marginRight: '40px',
        }
        const textStyle = {
            color: 'rebeccapurple'
        }
        const RenderTitles = ({ manuals }) => {
            return (
                manuals.map(manual => {
                    return (
                        <option key={manual.id} value={manual.id} >{manual.longTitle}</option>
                    )
                })
            )
        }
        const RenderConcepts = (props) => {
            //const manual = this.props.manuals.filter(manual => manual.id === props.manualID)[0];
            const concepts = this.props.concepts.filter(concepts => concepts.manualId === +this.state.manualSelectId);

            return (
                concepts.map(concept => {
                    return (
                        <li key={concept.id}>{concept.name}</li>
                    );
                })
            );
        }
        const required = val => val && val.length;
        const minLength = len => val => val && (val.length >= len);
        
        return (
            <article className='container' >
                <section>
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <section className='text-center mt-2'>
                            {/* <img src="/assets/images/Flask.png" style={{ width: '70px' }} /> */}
                            {/* <p className=''
                                style={titleStyle}>Add Manual Concepts</p> */}
                        </section>
                    </FadeTransform>
                </section>
                <section className='mt-4' style={textStyle}>
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(25%)'
                        }}>
                        <section className='mx-3'>
                            <Row style={{ marginLeft: '40px', marginRight: '30px' }}>
                                <Col md={3} className='mt-2'>
                                    <Label htmlFor='courseTitle' style={{ fontWeight: 'bold' }}>Manual Title:</Label>
                                </Col>
                                <Col >
                                    <Control.select id='courseTitle' model='.courseTitle' name='courseTitle'
                                        className='form-control'
                                        onChange={this.handleChange}>
                                        <RenderTitles manuals={this.props.manuals} />
                                    </Control.select>
                                </Col>
                            </Row>
                        </section>
                    </FadeTransform>
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(25%)'
                        }}>
                        <LocalForm onSubmit={values => this.onSubmitHandler(values)}
                            style={formStyle}>
                            <section className='border p-4 m-2 shadow' style={{ fontSize: '90%' }}>
                                <Row >
                                    <Control.text id='concept'
                                        model='.concept'
                                        name='concept'
                                        style={{ fontSize: '95%' }}
                                        placeHolder='Concept Name...'
                                        className='form-control mx-3'
                                        validators={{
                                            required,
                                            minLength: minLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        style={{ fontSize: '80%', marginLeft: '30px' }}
                                        model=".concept"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 10 characters',
                                            // maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Row>
                                <Row className='mx-5 mt-3'>
                                    <Button type='submit'
                                        className='btn btn-block modalAnchor w-100'
                                        style={{ fontSize: '95%' }}>
                                        Add Concept
                                            </Button>
                                    <Button type='reset'
                                        className='btn btn-block modalButton w-100'
                                        style={{ fontSize: '95%' }}>
                                        Cancel
                                            </Button>
                                </Row>
                            </section>
                        </LocalForm>
                    </FadeTransform>
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-25%)'
                        }}>
                        <section className='border p-2 m-2 mt-3' style={{ fontSize: '90%' }}>
                            <Col >
                                <Label style={{ fontWeight: 'bold' }}>Current Concepts</Label>
                                <ol>
                                    <RenderConcepts manualID={this.state.manualSelectId} />
                                </ol>
                            </Col>
                        </section>
                    </FadeTransform>
                </section>

            </article>
        )
    }
}

export default ManualConceptsAdd