import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';


export default function Login(props){
    const [user, setUser] = useState({
                                username:'',
                                password:''
                            })
    let history = useHistory();
   
    const handleChange = (e) => {
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value})

    }

    const login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login',user)
        .then(res => {
            console.log(res.data.payload)
            localStorage.setItem('token',res.data.payload)
            
            history.push('/friends')
        })
        .catch(err => console.log(err))

    }
    
    return (
        <div>
            <form onSubmit={login}>
            <input 
            type="text"
            name='username'
            value={user.name}
            placeholder='Username'
            onChange={handleChange}
            />
            <input 
            type="password"
            name='password'
            value={user.password}
            placeholder='Password'
            onChange={handleChange}
            />
            <button>Submit</button>
            </form>
        </div>
    )

}