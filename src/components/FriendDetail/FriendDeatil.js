import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FriendDeail.css'

const FriendDetail = () => {
    
    const {friendID} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendID}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    })
    return (
        <div className='cards'>
            <h1>this is a friends details components : {friendID}</h1>
            <h2> Name: {friend.name}</h2>
            <h3>Email: {friend.email}</h3>
            <h3> Website: {friend.website}</h3>
        </div>
    );
};

export default FriendDetail;
