import React from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";

const Userc  = () => {
    
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        if(userContext){
            userContext.setUser({
                name: 'harry',
                email: 'harry@gmail.com'
            })
        }
    }
    const handleLogout = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Login</button>
            <div>User name is {userContext?.user?.name}</div>
            <div>User email is {userContext?.user?.email}</div>
        </div>
    )
}
export default Userc;