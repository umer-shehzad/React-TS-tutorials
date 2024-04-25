// useState type
import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

const User = () => {
    const [user, setUser] = useState< AuthUser | null>(null);
    const handlelogin = () => {
        setUser({
            name: "Umer",
            email: "umer96@gmail.com",
        })
    }
    const handlelogout = () => { 
        setUser(null);
    }
    return (
        <div>
            <button onClick={handlelogin}>LogIn</button>
            <button onClick={handlelogout}>LogOut</button>
            <p>User name is: {user?.name}</p>
            <p>User email is: {user?.email}</p>
        </div>
    )
}

export default User
