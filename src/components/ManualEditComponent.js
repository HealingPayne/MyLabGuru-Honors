import React, { Component } from 'react';
import { Button, Label, Row, Col } from 'reactstrap';
import { Control, Form } from 'react-redux-form'

// import '../styles/page.css';
import { FadeTransform } from 'react-animation-components';

class ManualEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manualSelectId: 1,
            conceptSelectId: -1,
            longtitle: '',
            shortTitle: '',
            image: '',
            shortDescription: '',
            longDescription: '',
            sampleImage: '',
            labFiles: '',
            productionDate: ''
        }
        this.handleTitlesChange = this.handleTitlesChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    componentDidMount() {
        const manual = this.props.manuals.filter(manual => manual.id === +1)[0];
        this.setState({
            shortTitle: manual.shortTitle,
            longTitle: manual.longTitle,
            image: manual.image,
            shortDescription: manual.shortDescription,
            longDescription: manual.longDescription,
            sampleImage: manual.sampleImage,
            labFiles: manual.labFiles,
            productionDate: manual.productionDate
        });
    }

    onSubmitHandler(values) {
        // this.props.postManual(
        //     values.shortTitle,
        //     values.longTitle,
        //     values.image,
        //     values.shortDescription,
        //     values.longDescription,
        //     values.sampleImage,
        //     values.labFiles,
        //     values.productionDate
        // );
        console.log('Current state is: ' + JSON.stringify(values));
    }
    handleTitlesChange(event) {
        this.setState({ manualSelectId: +event.target.value });
        const manual = this.props.manuals.filter(manual => manual.id === +event.target.value)[0];
        this.setState({
            shortTitle: manual.shortTitle,
            longTitle: manual.longTitle,
            image: manual.image,
            shortDescription: manual.shortDescription,
            longDescription: manual.longDescription,
            sampleImage: manual.sampleImage,
            labFiles: manual.labFiles,
            productionDate: manual.productionDate
        });
    }

    resetForm() {
        console.log('Total Manuals: ' + this.props.manuals.length);
        console.log('Selected Manual: ' + this.state.manualSelectId);
        const manual = this.props.manuals.filter(manual => manual.id === +this.state.manualSelectId)[0];
        this.setState({
            shortTitle: manual.shortTitle,
            longTitle: manual.longTitle,
            image: manual.image,
            shortDescription: manual.shortDescription,
            longDescription: manual.longDescription,
            sampleImage: manual.sampleImage,
            labFiles: manual.labFiles,
            productionDate: manual.productionDate
        });
    }
    handleInputChange(e) {
        switch (e.target.name) {
            case 'shortTitle':
                this.setState({ 'shortTitle': e.target.value });
                return;
            case 'longTitle':
                this.setState({ 'longTitle': e.target.value });
                return;
            case 'image':
                this.setState({ 'image': e.target.value });
                return;
            case 'shortDescription':
                this.setState({ 'shortDescription': e.target.value });
                return;
            case 'longDescription':
                this.setState({ 'longDescription': e.target.value });
                return;
            case 'sampleImage':
                this.setState({ 'sampleImage': e.target.value });
                return;
            case 'labFiles':
                this.setState({ 'labFiles': e.target.value });
                return;
            case 'productionDate':
                this.setState({ 'productionDate': e.target.value });
                return;
        }
    }
    render() {
        const textStyle = {
            color: 'rebeccapurple'
        }
        const titleStyle = {
            textAlign: 'center',
            fontSize: '150%',
            color: 'rgba(177, 123, 177)',
            textShadow: '1px 1px 1px gray'
        }
        const formStyle = {
            marginLeft: '50px',
            marginRight: '50px'
        }
        const RenderTitles = ({ manuals }) => {
            return (
                manuals.map(manual => {
                    return (
                        <option key={manual.id} value={manual.id}>{manual.longTitle}</option>
                    )
                })
            )
        }
        return (
            <article className='container' style={{ fontSize: '80%' }}>
                <section className='mt-3' style={textStyle}>
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                       
                    </FadeTransform>
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(25%)'
                        }}>
                        <Form model='' onSubmit={values => this.onSubmitHandler(values)}
                            style={formStyle}>
                            <section className='my-4 shadow' style={{ border: '1px solid #eee', padding: '20px' }}>
                                <Row>
                                    <Col>
                                        <Control.select id='courseTitle' model='.courseTitle' name='courseTitle'
                                            className='form-control'
                                            onChange={this.handleTitlesChange}>
                                            <RenderTitles manuals={this.props.manuals} />
                                        </Control.select>
                                    </Col>
                                    {/* <Col md={3} >
                                        <button type='button' className='btn w-100' 
                                                onClick={this.getDetails}>Get Manual</button>
                                    </Col>                                 */}
                                </Row>
                            </section>
                            <Row className='form-group'>
                                <Label htmlFor='shortTitle' md={3} className='mt-2'>Short Title:</Label>
                                <Col md={9}>
                                    <Control.text id='shortTitle' model='.shortTitle' name='shortTitle'
                                        placeholder='Short Title...'
                                        className='form-control'
                                        value={this.state.shortTitle}
                                        onChange={this.handleInputChange}
                                        style={{ fontSize: '95%' }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='longTitle' md={3} className='mt-2'>Long Title:</Label>
                                <Col md={9}>
                                    <Control.text id='longTitle' model='.longTitle' name='longTitle'
                                        placeholder='Long Title...'
                                        className='form-control'
                                        value={this.state.longTitle}
                                        style={{ fontSize: '95%' }}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='image' md={3} className='mt-2'>Manual Image:</Label>
                                <Col md={9}>
                                    <Control.text id='image' model='.image' name='image'
                                        placeholder='/assets/images/'
                                        className='form-control'
                                        value={this.state.image}
                                        style={{ fontSize: '95%' }}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='shortDescription' md={3} className='mt-2'>Short Description:</Label>
                                <Col md={9}>
                                    <Control.textarea rows='3' id='shortDescription' model='.shortDescription' name='shortDescription'
                                        placeholder='Short Description...'
                                        className='form-control'
                                        value={this.state.shortDescription}
                                        style={{ fontSize: '95%' }}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='longDescription' md={3} className='mt-2'>Long Description:</Label>
                                <Col md={9}>
                                    <Control.textarea rows='3' id='longDescription' model='.longDescription' name='longDescription'
                                        placeholder='Long Description...'
                                        className='form-control'
                                        value={this.state.longDescription}
                                        style={{ fontSize: '95%' }}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='sampleImage' md={3} className='mt-2'>Sample Image:</Label>
                                <Col md={9}>
                                    <Control.text id='sampleImage' model='.sampleImage' name='sampleImage'
                                        placeholder='/assets/samples/'
                                        className='form-control'
                                        value={this.state.sampleImage}
                                        style={{ fontSize: '95%' }}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='labFiles' md={3} className='mt-2'>Lab Files:</Label>
                                <Col md={9}>
                                    <Control.text id='labFiles' model='.labFiles' name='labFiles'
                                        placeholder='/assets/samples/'
                                        className='form-control'
                                        value={this.state.labFiles}
                                        style={{ fontSize: '95%' }}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='productionDate' md={3} className='mt-2'>Production Date:</Label>
                                <Col md={9}>
                                    <Control.text id='productionDate' model='.productionDate' name='productionDate'
                                        placeholder='Production Date...'
                                        className='form-control'
                                        value={this.state.productionDate}
                                        style={{ fontSize: '95%' }}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group text-center'>
                                <Col md={{ size: 9, offset: 3 }}>
                                    <button type='submit'
                                        className='btn btn-block w-100 modalAnchor'
                                        style={{ fontSize: '95%' }}>
                                        Save Edit Session
                                        </button>
                                </Col>
                                <Col md={{ size: 9, offset: 3 }}>
                                    <Button type='reset'
                                        className='btn btn-block w-100 modalButton'
                                        style={{ fontSize: '95%' }}
                                        onClick={this.resetForm}>
                                        Cancel Session
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
export default ManualEdit