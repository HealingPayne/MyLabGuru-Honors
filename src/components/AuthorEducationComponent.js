import React from 'react';
import { withRouter } from 'react-router-dom';

function AuthorEducation(props) {
    const RenderEducation = ({ education }) => {
        return (
            education.map(ed => {
                return (
                    <tr key={ed.id}>
                        <td className='py-1'>{ed.name}</td>
                    </tr>
                );
            })
        )
    }
    return (
        <table className='table table-striped text-secondary'>
            <thead className='bg-secondary text-white'>
                <tr>
                    <th className='py-1'>Education and Certification</th>
                </tr>
            </thead>
            <tbody>
                <RenderEducation education={props.education} />
            </tbody>
        </table>
    );

}
export default AuthorEducation 