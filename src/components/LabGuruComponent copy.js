import React from 'react';

function LabGuru(props) {
    const getLabGuru = () => {
        return (
            <React.Fragment>
                <section className="row mt-2">
                    <div className='col-md-5'>
                        <figure className='text-center ml-3'>
                            <img src="/assets/images/Dell-Payne.png" alt="Dell Payne" style={{ width: '250px' }} />
                            <figcaption className='text-dark font-weight-bold'>Dell Payne</figcaption>
                        </figure>
                    </div>
                    <div className='col-md-7'>
                        <div className='mx-4  mt-1 productText'>
                            As a teacher and mentor I have learned that the most powerful tool in
                            learning is repetition and Labs are a critical part of this endevour. My goal
                            in a classroom environment is to make everything about the Lab. With
                            this in mind I have created manuals that represent my Labs that can be used by
                            anyone, in class or outside.
                            I hope you will find these useful in your journey with technology.

                         </div>
                    </div>
                </section>
                <section className="row mx-2 mt-2">
                    <div className="col-md-6">
                        <div className='mx-2'>
                            <table className='table table-striped text-secondary'>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th className='py-1'>Previous Training Clients</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='py-1'>(NASA) Kennedy Space Center</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>E-Bay</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>Intel Digital Corp</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>Fidelity Investments</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>State of CA (CDFA)</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>Napa State Hospital</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>Many Others...</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='mx-2'>
                            <table className='table table-striped text-secondary'>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th className='py-1'>Technical Expertice</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='py-1'>C# and VB.NET</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>HTML5 and CSS3</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>JavaScript, jQuery</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>Angular</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>XML, XSD, XSLT</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>ASP.NET Technologies</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>SQL Server Development</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section className='row'>
                    <div className="col-md-12">
                        <div className='mx-4'>
                            <table className='table table-striped text-secondary'>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th className='py-1'>Education and Certifications</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='py-1'>Utah State University (BA)</td>
                                    </tr>
                                    <tr>
                                        <td class='py-1'>MCSD (Microsoft Certified Solutions Developer)</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>MCT (Microsoft Certified Trainer)</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>Certification of Excellence (Microsoft)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
    return (
        <section className='container'>
            {getLabGuru()}
        </section>
    );
}
export default LabGuru;