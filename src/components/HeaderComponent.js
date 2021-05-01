import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button, Label, Row, Col,
    Modal, ModalHeader, ModalBody
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form'

import logo from '../images/MyLabGuruBanner.png';
import brand from '../images/LOGO.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        }
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {

        return (
            <React.Fragment>
                <header className='' >
                    <Link to={'/home'}>
                        <img id='logo' src={logo} alt='Logo'
                            className='my-3 shadow-sm border' />
                    </Link>
                    <LoginModal />
                </header>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand style={this.style} className='mr-auto' href='/'>
                            <Link to={'/home'}>
                                <img src={brand} alt='Logo' height='30' width='30' />
                            </Link>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        MANUALS
                                    </DropdownToggle>
                                    <DropdownMenu left className='mt-2'>
                                        {/* <DropdownItem tag={Link} to="/details/607b69266a484e55fcc5099f">JavaScript</DropdownItem>
                                         <DropdownItem tag={Link} to="/details/607b6ee56a484e55fcc509a0">HTML-CSS</DropdownItem>
                                        <DropdownItem tag={Link} to="/details/607b6f3c6a484e55fcc509a1">jQuery</DropdownItem>
                                        <DropdownItem tag={Link} to="/details/7">Bootstrap</DropdownItem>
                                        <DropdownItem tag={Link} to="/details/607b6f626a484e55fcc509a2">Angular</DropdownItem>
                                        <DropdownItem tag={Link} to="/details/607b6f9b6a484e55fcc509a3">C#</DropdownItem> */}
                                        <DropdownItem tag={Link} to="/details/1">JavaScript</DropdownItem>
                                        <DropdownItem tag={Link} to="/details/2">HTML-CSS</DropdownItem>
                                        <DropdownItem tag={Link} to="/details/3">jQuery</DropdownItem>
                                        <DropdownItem tag={Link} to="/details/6">Bootstrap</DropdownItem>
                                        <DropdownItem tag={Link} to="/details/4">Angular</DropdownItem>
                                        <DropdownItem tag={Link} to="/details/5">C#</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink className='nav-link' to='/labguru/1'>
                                        LAB GURU
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        SUPPORT
                                    </DropdownToggle>
                                    <DropdownMenu left className='mt-2'>
                                        <DropdownItem tag={Link} to="/aboutus">About Us</DropdownItem>
                                        <DropdownItem tag={Link} to="/comments">Comments</DropdownItem>
                                        {/* <DropdownItem divider />
                                        <DropdownItem tag={Link} to="/vitalsource">Vital Source</DropdownItem> */}
                                        <DropdownItem divider />
                                        <DropdownItem tag={Link} to="/admin">Admin Control-Panel</DropdownItem>
                                        {/* <DropdownItem tag={Link} to="/addmanual">
                                            <i className='fa fa-Administrator'>{' '}</i>Add Manual
                                        </DropdownItem>
                                        <DropdownItem tag={Link} to="/adconcepts">
                                            <i className='fa fa-Administrator'>{' '}</i>Add Concepts
                                        </DropdownItem> */}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink className='nav-link' to='/freesample'>
                                        {'  '} SAMPLE
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/admin'>
                                        {'  '} ADMIN
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default Header;

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            touched: {
                userName: false,
                paswword: false
            },
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    toggleModal() {
        if (!window.login) {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            })
        }
    }
    onSubmitHandler(values) {
        if (values.userName == 'admin' && values.password == 'password') {
            this.toggleModal();
            window.login = true;
        }
        console.log(window.login)
        // this.props.postComment(values.firstName, values.lastName, values.message);
        // console.log('Current state is: ' + JSON.stringify(values));
    }
    render() {
        const styleImage = {
            width: '150px',
        }
        const adminLink = {
            border: 'none',
            backgroundColor: 'white',
            marginTop: '30px',
            marginRight: '40px',
            fontSize: '195%',
            textShadow: '1px 1px 1px gray',
            color: 'rgba(208, 202, 233, 0.972)',
            float: 'right'
        }
        const required = val => val && val.length;
        const maxLength = len => val => !val || (val.length <= len); //1st function takes max len and 2nd take the value
        const minLength = len => val => val && (val.length >= len);
        return (
            <React.Fragment>
                <a style={adminLink} onClick={this.toggleModal}>
                    <span className='fa fa-user' title='Administrator'></span>
                </a>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Administrator Login</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.onSubmitHandler(values)}
                            className=' pt-2'>
                            <Row className='form-group'>
                                <Label htmlFor='userName' md={3}>User Name:</Label>
                                <Col md={9}>
                                    <Control.text id='userName' model='.userName' name='userName'
                                        placeholder='User Name...'
                                        className='form-control'
                                        style={{ fontSize: '95%' }}
                                        validators={{
                                            required,
                                            minLength: minLength(3),

                                        }}
                                    />
                                    <Errors
                                        className="text-danger ml-2"
                                        style={{ fontSize: '80%' }}
                                        model=".userName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 3 characters',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='password' md={3}>Password:</Label>
                                <Col md={9}>
                                    <Control.password id='password' model='.password' name='password'
                                        placeholder='Password...'
                                        className='form-control'
                                        style={{ fontSize: '95%' }}
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger ml-2"
                                        style={{ fontSize: '80%' }}
                                        model=".password"
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
                                    {/* <Link to={'/admin'}> */}
                                    <button type='submit' className='btn btn-block w-100 modalAnchor'>Log-In</button>
                                    {/* </Link> */}
                                </Col>
                                <Col md={{ size: 9, offset: 3 }}>
                                    <Button type='button'
                                        className='btn btn-block w-100 modalButton'
                                        onClick={this.toggleModal}>
                                        Cancel
                                        </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                        {/* <div className='row text-center border-bottom pb-2 mb-3'>
                            <div className='col-6 text-secondary'>
                                <img src='/assets/images/Flask.png' style={styleImage} />
                            </div>
                            <div className='col-6 mt-4' >
                                <Link to={'/addmanual/'}>
                                    <button className='btn modalAnchor mb-3' onClick={this.toggleModal}>Add Manual</button>
                                </Link>
                                <Link to={'/addconcepts/'}>
                                    <button className='btn modalAnchor mb-3' onClick={this.toggleModal}>Add Concepts</button>
                                </Link>
                                <button type='button' className='btn modalButton ' onClick={this.toggleModal}>
                                    Cancel
                                </button>
                            </div>
                        </div> */}

                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}