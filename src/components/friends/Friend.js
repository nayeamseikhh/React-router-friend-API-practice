import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    return (
        <div className='card'>
            <h2>{id}</h2> <br />
            <h1>Name: {name}</h1> <br />
            <h5>Email: {email}</h5>
            <p> <Link to={`/friend/${id}`}> <br />
            <button className='button-85'>Show details of ID No: {id}</button>
             </Link> </p>
             {/* one more button is panding for read */}
        </div>
    );
};

export default Friend;