import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = (props) => {
    
    const[user, setUser] = useState()

    const {id} = useParams()

    const getUser = () => {
        axiosWithAuth().get('/friends/id')
        .then(res => console.log(res))

    }
    useEffect(api, setUser(), [id])

  

    return ( 
        <div>
            <h2>{user.name}</h2>
        </div>
    )
}

export default Friend;