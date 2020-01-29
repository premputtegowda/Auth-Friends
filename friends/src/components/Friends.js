import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendForm from './FriendForm'
import { Link, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Friend from './Friend';


const Friends = () => {
    const [friends, setFriends] = useState();
    const getFriends = () => {
        axiosWithAuth().get('/api/friends')
        .then(res=> setFriends(res.data))
        .catch(err => console.log(err))
    }
    useEffect(getFriends,[])
    
   
   

    return (
        <div>
            <FriendForm getFriends = {getFriends}/>
            {friends ? 
             
             friends.map((friend,index) => (
                
                    <Link key={index} to={`/friends/${friend.id}`}>
                        <div > {friend.name}</div>
                    </Link>
                
            )): 'Loading friends data...' }
           <hr />
           {friends ? <PrivateRoute path="/friends/:id" component= {Friend} /> : null }
           

        </div>
    )
}

export default Friends;