// useState type
import { useContext } from 'react'
import { UserContext } from './UserContext'

export const User = () => {
    const userContext = useContext(UserContext);
    const handlelogin = () => {
        userContext.setUser({
            name: "Umer",
            email: "umer96@gmail.com",
        })
    }
    const handlelogout = () => {
        userContext.setUser(null)
    }
    return (
        <div>
            <button onClick={handlelogin}>LogIn</button>
            <button onClick={handlelogout}>LogOut</button>
            <p>User name is: {userContext.user?.name}</p>
            <p>User email is: {userContext.user?.email}</p>
        </div>
    )
}
