import React, { Component } from 'react';
import { Button, Label, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form'

// import '../styles/page.css';
import { FadeTransform } from 'react-animation-components';

class ManuaConceptsEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manualSelectId: 1,
            conceptSelectId: -1
        }
        this.resetForm = this.resetForm.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleConceptChange = this.handleConceptChange.bind(this);
    }
    componentDidMount() {

    }
    handleTitleChange(event) {
        this.setState({ manualSelectId: event.target.value, conceptSelectId: -1 });
    }
    handleConceptChange(event) {
        this.setState({ conceptSelectId: event.target.value });
    }
    resetForm() {

    }
    render() {
        const textStyle = {
            color: 'rebeccapurple'
        }
        // const titleStyle = {
        //     textAlign: 'center',
        //     fontSize: '150%',
        //     color: 'rgba(177, 123, 177)',
        //     textShadow: '1px 1px 1px gray'
        // }
        const formStyle = {
            marginLeft: '50px',
            marginRight: '50px',
        }
        const RenderTitles = () => {
            return (
                this.props.manuals.map(manual => {
                    return (
                        <option key={manual.id} value={manual.id}>{manual.longTitle}</option>
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
                        <option key={concept.id} value={concept.id}>{concept.name}</option>
                    );
                })
            );
        }
        // const handleEditConcept = (event) => {
        //     console.log('Edit Concept: ' + this.state.conceptSelectId);
        //     const selectedConcept = this.props.concepts.filter(concept => concept.id === +this.state.conceptSelectId)[0];
        //     if (selectedConcept) {
        //         console.log(selectedConcept.id + ':  ' + selectedConcept.manualId + ' - ' + selectedConcept.name);
        //     } else {
        //         console.log('No Concept Selected');
        //     }
        // }
        return (
            <article className='container' style={{ fontSize: '90%', height:'600px' }}>
                <section className='mt-3' style={textStyle}>
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <div className='text-center'>
                            {/* <p className=''
                                style={titleStyle}>Lab Concepts Edit Form</p> */}
                        </div>
                    </FadeTransform>
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(25%)'
                        }}>
                        {/* <Form style={formStyle}> */}
                        <section className='my-4 shadow mx-4' style={{ border: '1px solid #eee', padding: '20px' }}>
                            <Row>
                                <Col>
                                    <Control.select id='courseTitle' model='.courseTitle' name='courseTitle'
                                        className='form-control'
                                        onChange={this.handleTitleChange}>
                                        <RenderTitles manuals={this.props.manuals} />
                                    </Control.select>
                                </Col>
                            </Row>
                        </section>
                        <section style={formStyle}>
                            <Row className='form-group'>
                                <Col >
                                    <Control.select size='10' id='listConcepts' model='.listConcepts' name='listConcepts'
                                        className='form-control'
                                        onChange={this.handleConceptChange}
                                        style={{ fontSize: '95%' }}>
                                        <RenderConcepts  />
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group text-center'>
                                <Col >
                                    {/* <button type='button'
                                        className='btn btn-block w-100 modalAnchor'
                                        style={{ fontSize: '95%' }}
                                        onClick={handleEditConcept}>
                                        Edit
                                        </button> */}
                                    <ModalConceptsEdit conceptId={this.state.conceptSelectId}
                                        concepts={this.props.concepts} />
                                </Col>
                                <Col >
                                    <Button type='button'
                                        className='btn btn-block w-100 modalButton'
                                        style={{ fontSize: '95%' }}
                                        onClick={this.resetForm}>
                                        Cancel
                                    </Button>
                                </Col>
                            </Row>
                        </section>
                        {/* </Form> */}
                    </FadeTransform>
                </section>
            </article>
        )
    }
}
export default ManuaConceptsEdit

class ModalConceptsEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            concept: null,
            touched: {
                name: false
            },
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onSubmitHandler(values) {
        this.toggleModal();
        //this.props.postComment(values.firstName, values.lastName, values.message);

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

        console.log('total concepts: ' + this.props.concepts.length + ' - selectId: ' + this.props.conceptId)
        //const concept = this.props.concepts.filter(concept => concept.id === +this.props.conceptId);
        //console.log('concept Name: ' + concept.name)
        return (
            <section className=''>
                <button id='' onClick={this.toggleModal}
                    type='button'
                    className='btn btn-block w-100 modalButton'
                    style={{ fontSize: '95%' }}>
                    <i className=''></i>
                    Edit Concept
                </button>
                <section className='px-0'>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>
                            Enter Comment
                        </ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={values => this.onSubmitHandler(values)}>
                                <Row className='form-group'>
                                    <Label htmlFor='name' md={3}>Concept:</Label>
                                    <Col md={9}>
                                        <Control.text id='name' model='.name' name='name'
                                            placeHolder='Concept Name...'
                                            className='form-control'
                                            value={this.props.conceptId}
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger ml-2"
                                            style={{ fontSize: '80%' }}
                                            model=".name"
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
