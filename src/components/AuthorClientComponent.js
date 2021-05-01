import React from 'react';

function AuthorClients(props) {

    const RenderClients = ({clients}) => {
        return (
            clients.map(client => {
                return (
                    <tr key={client.id}>
                        <td className='py-1'>{client.name}</td>
                    </tr>
                );
            })
        )
    }
    return (
        <table className='table table-striped text-secondary'>
            <thead className='bg-secondary text-white'>
                <tr>
                    <th className='py-1'>Previous Clients</th>
                </tr>
            </thead>
            <tbody>
                <RenderClients clients={props.clients} />
            </tbody>
        </table>
    );

}
export default AuthorClients 