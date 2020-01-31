import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = (props) => {
    
    const[friend, setFriend] = useState()

    const {id} = useParams()
    console.log(friend)
   

    const getFriend = () => {
        axiosWithAuth().get(`/api/friends/${id}`)
        .then(res=> setFriend(res.data))
        .catch(err => console.log(err))
    }
  
    useEffect(getFriend,[id])
    

  

    return ( 
        <div>
            {friend ? 
            <div>
                <h2>{friend.name}</h2>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p> 
                </div> : null}
            
        </div>
    )
}

export default Friend;