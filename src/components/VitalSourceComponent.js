import React from 'react';
import { FadeTransform } from 'react-animation-components';

function VitalSource() {

    return (
        <FadeTransform in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-15%)'
            }}>
            <section id='vitalsource' className='mt-4 mb-5 mx-auto text-secondary'>
                <header className='border-bottom text-center'>
                    <h3>Our eBook Delivery</h3>
                </header>

                <section className='mt-3 mx-3 ebookText'>
                    We have chosen <strong>VitalSource</strong> as our content delivery
                solution for our eBook Lab Manuals. VitalSource is well known in the
                Education segment and has a great reputation for ease of use and rich
                user features such as searching, adding bookmarks, adding notes, read aloud,
                and highlighting; everything needed for an exceptional learning environment.
            </section>
                <section className='mt-3 mr-4'>
                    <h5 className='ml-3'>Two options Exist:</h5>
                    <div>
                        <ol id='vitalSourceList'>
                            <li className='mb-2 ebookText'>
                                An <strong>online</strong> version which provides a Web interface for creating your personal
                            Bookshelf. This interface will provide all capabilities identified above. With
                            this version, your online books will <strong>expire</strong> after <strong>365 days</strong> from purchase.
                        </li>
                            <li className='ebookText'>
                                Alternately, you can install an <strong>offline</strong> version of Bookshelf of which books do
                            <strong>NOT</strong> expire. This app can be downloaded for free and can reside on 2 computers and
                            2 devices of choice. Only one device can be active at a time.  The offline version
                            provides enhanced features like dual facing pages.
                        </li>
                        </ol>
                    </div>
                </section>
                <p className='mt-2 text-center text-dark'><em>Again, with the <strong>offline</strong> version, your eBooks do <strong>NOT</strong> expire.</em></p>
                <p className='text-center text-info font-weight-bold ml-3'>Please enjoy our Labs...</p>

                <section className="labs-logo my-3 mx-auto">
                    <img src="/assets/images/Flask.png" style={{ width: '150px' }} />
                </section>
            </section>
        </FadeTransform >
    );
}
export default VitalSource;