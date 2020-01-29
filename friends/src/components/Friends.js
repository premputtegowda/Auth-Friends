import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend'
import { Link, Route } from 'react-router-dom'


const Friends = () => {
    const [friends, setFriends] = useState();
    const getFriends = () => {
        axiosWithAuth().get('/api/friends')
        .then(res=> setFriends(res.data))
        .catch(err => console.log(err))
    }
    useEffect(getFriends,[])
    console.log(friends)
   
   

    return (
        <div>
            {friends ? 
             
             friends.map(friend => (
                
                    <Link to={`/friends/${friend.id}`}>
                        <div key={friend.id}> {friend.name}</div>
                    </Link>
                
            )): 'Loading friends data...' }
           
           {/* <PrivateRoute path="friends/:id">
               <Friend />
           </PrivateRoute> */}

        </div>
    )
}

export default Friends;