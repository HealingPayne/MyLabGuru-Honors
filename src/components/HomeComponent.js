import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/page.css';
import HomeCarousel from './HomeCarouselComponent';
import { FadeTransform } from 'react-animation-components';

function Home(props) {
    const imageStyle = {
        width: '100%',
        maxWidth: '180px',
        boxShadow: '5px 5px 5px gray',
        zIndex: '0',
        marginTop: '10px'
    }
    const titleStyle = {
        fontSize: '125%',
        color: 'rebeccapurple'
    }
    //const RenderManuals = (props) => {
    const RenderManuals = ({ manuals }) => {
        return (
            manuals.map(manual => {
                return (
                    <>
                        <FadeTransform in
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(25%)'
                            }}>
                            <section key={manual.id} className='row p-2 mb-2' style={{ width: '80%', margin: '0 auto' }}>
                                <div className='col-md'>
                                    <p className='font-weight-bold mt-0 mb-1' style={titleStyle}>{manual.longTitle}</p>
                                    <p className='productText m-0'>{manual.shortDescription}</p>
                                </div>
                                <div className="col-md-4 text-center mt-0">
                                    <img src={manual.image} style={imageStyle} />
                                    <br />
                                    <Link to={`/details/${manual.id}`}>
                                        <button id='learnButton' className='btn mt-3 w-100'>Learn More</button>
                                    </Link>
                                </div>
                            </section>
                        </FadeTransform>
                    </>
                );
            })
        )
    }
    const styleContent = {

    }
    return (
        <React.Fragment>
            {/* <HomeCarousel /> */}
            <div id='manualInfo'>
                <FadeTransform in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateX(0.5%)'
                    }}>
                    <HomeCarousel ride='carousel' />
                </FadeTransform>

                <RenderManuals manuals={props.manuals} />
            </div>
        </React.Fragment>
    );
}
export default Home;