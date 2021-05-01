import React from 'react';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';
import '../styles/page.css';

function Admin() {
    const styleImage = {
        width: '100px',
        borderRadius: '20px',
        boxShadow: '3px 3px 3px gray'
    }
    const titleStyle = {
        textAlign: 'center',
        fontSize: '135%',
        color: 'rgba(177, 123, 177)',
        textShadow: '1px 1px 1px gray'
    }
    const buttonPanelStyle = {
        border: '1px solid rgba(0,0,0,.1)',
        boxShadow: '1px 1px 1px gray'
    }
    return (
        <article className='container' style={{ height: '800px' }}>
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translatey(-50%)'
                }}>
                <header className='mt-3'>
                    <h5 style={titleStyle}>Administrator Panel</h5>
                </header>
            </FadeTransform>
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(50%)'
                }}>
                <div className='row text-center border-bottom border-top pb-2 mb-3 mx-5'>

                    <div className='col-md-4  mt-4' style={buttonPanelStyle} >
                        <p style={titleStyle} className='mb-1'>Manuals</p>
                        <Link to={'/addmanual'}>
                            <button className='btn w-100 mb-3' style={{fontSize:'80%'}}>
                                <i className='fa fa-plus float-left ml-3 pt-1'></i>
                                 Add Manual
                            </button>
                        </Link>
                        <Link to={'/editmanual'}>
                            <button className='btn  w-100 mb-3' style={{ fontSize: '80%' }}>
                                <i className='fa fa-edit float-left ml-3 pt-1'></i>
                                 Edit Manual
                            </button>
                        </Link>
                        <Link to={'/deletemanual'}>
                            <button className='btn  w-100 mb-3' style={{ fontSize: '80%' }}>
                                <i className='fa fa-trash float-left ml-3 pt-1'></i>
                                Delete Manual
                            </button>
                        </Link>
                    </div>
                    <div className='col-md-4 text-secondary mt-5'>
                        <img src='/assets/images/logo.jpg'
                            style={styleImage} />
                    </div>
                    <div className='col-md-4  mt-4' style={buttonPanelStyle}>
                        <p style={titleStyle} className='mb-1'>Concepts</p>
                        <Link to={'/addconcepts'}>
                            <button className='btn  w-100 mb-3' style={{ fontSize: '80%' }}>
                                <i className='fa fa-plus float-left ml-3 pt-1'></i>
                                {'  '}Add Concept
                            </button>
                        </Link>
                        <Link to={'/editconcepts'}>
                            <button className='btn  w-100 mb-3' style={{ fontSize: '80%' }}>
                                <i className='fa fa-edit float-left ml-3 pt-1'></i>
                                 Edit Concept
                            </button>
                        </Link>
                        <Link to={'/deleteconcepts'}>
                            <button className='btn  w-100 mb-3' style={{ fontSize: '80%' }}>
                                <i className='fa fa-trash float-left ml-3 pt-1'></i>
                                 Delete Concept
                            </button>
                        </Link>
                    </div>
                </div>
            </FadeTransform>
        </article>
    );
}
export default Admin;
{/* 
    <a href='/assets/samples/SampleManual.pdf' download className="btn modalAnchor  mb-3" onClick={this.toggleModal}>
     Download Now
    </a> 
*/}