import React from 'react';

function AuthorBio(props) {
    console.log(props.author.image);
    return (
        <section className="row mt-2">
            <div className='col-md-5'>
                <figure className='text-center ml-4'>
                    <img src={props.author.image} alt={props.author.name} 
                         style={{ width: '250px'}} />
                    <figcaption className='text-dark text-center font-weight-bold'>{props.author.name}</figcaption>
                </figure>
            </div>
            <div className='col-md-7'>
                <div className='mx-5  mt-2 productText'>
                    {props.author.description}
                </div>
            </div>
        </section>
    );
}
export default AuthorBio;