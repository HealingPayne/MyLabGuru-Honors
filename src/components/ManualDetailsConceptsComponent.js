import React from 'react';

function ManualDetailsConcepts(props) {
    
    const RenderConcepts = ({concepts}) => {
        if (concepts) {
            return (
                concepts.map(concept => {
                    return (
                        <li key={concept.id}>{concept.name}</li>
                    );
                })
            );
        } else {
            return (
                <p className='mt-3 py-2 text-danger 
                              border-top border-bottom text-center'>
                    Lab Manual Concepts NOT available.
                </p>
            )
        }
      
    }
    return (
        <div className=''>
            <p className="productListLabel mb-1 ml-3">You will learn how to</p>
            <div className=' '>
                <ul className='text-secondary productList productText'>
                    <RenderConcepts concepts={props.concepts} />
                </ul>
            </div>
        </div>
    );
}
export default ManualDetailsConcepts;