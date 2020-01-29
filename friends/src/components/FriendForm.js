import React, {useState}from 'react';


const FriendForm = () => {
    const [user, Setuser] = useState({
                            name:null,
                            age: null,
                            email:null
    })
    return (
        <div>
            <form>
                <input
                    type="text"
                    name='name'
                    value={user.name}
                    placeholder = "Name"
                />
                <input
                    type="text"
                    name='age'
                    value={user.age}
                    placeholder = "Age"
                />
                <input
                    type="text"
                    name='email'
                    value={user.email}
                    placeholder = "Email"
                />
                <button>Add a Friend</button>
            </form>
        </div>
    )
}