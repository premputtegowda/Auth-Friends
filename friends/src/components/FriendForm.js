import React, {useState}from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'


const FriendForm = (props) => {
    const [user, setUser] = useState({
                            name:null,
                            age: null,
                            email:null
    })
    console.log(user)
    const handleChange = (e) => {
        e.preventDefault();
        setUser({...user, [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/api/friends', user)
        .then(
            res => {
                console.log(res)
                setUser({...user,name:'',
                    age: '',
                email:''})
            })
        .catch(err => console.log(err))
        props.getFriends()
     
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='name'
                    value={user.name}
                    placeholder = "Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name='age'
                    value={user.age}
                    placeholder = "Age"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name='email'
                    value={user.email}
                    placeholder = "Email"
                    onChange={handleChange}
                />
                <button>Add a Friend</button>
            </form>
        </div>
    )
}
export default FriendForm;