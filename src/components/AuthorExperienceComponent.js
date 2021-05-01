import React from 'react';

function AuthorExperience(props) {
    const RenderExperience = ({ experience }) => {
        return (
            experience.map(ex => {
                return (
                    <tr key={ex.id}>
                        <td className='py-1'>{ex.name}</td>
                    </tr>
                );
            })
        )
    }
    return (
        <table className='table table-striped text-secondary'>
            <thead className='bg-secondary text-white'>
                <tr>
                    <th className='py-1'>Technical Experience</th>
                </tr>
            </thead>
            <tbody>
                <RenderExperience experience={props.experience} />
            </tbody>
        </table>
    );

}
export default AuthorExperience