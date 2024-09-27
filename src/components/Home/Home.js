import React, { useEffect, useState } from 'react';
import Friend from '../friends/Friend';


const Home = () => {
    const [friends, setFriends] = useState([]);
  
useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data => setFriends(data))
}, []);

    return (
        <div>
             <h1>Friend: {friends.length}</h1>
    {
      friends.map(friend => <Friend friend={friend}></Friend>)
    }
        </div>
    );
};

export default Home;