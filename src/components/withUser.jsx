import React, { useContext } from 'react'
import { UserContext } from '../App'

function withUser(IncomingComponent){
    
    return function OutgoingComponent(props){
        const {user , setUser} = useContext(UserContext);
        return <IncomingComponent {...props} user={user}  setUser={setUser}/>
    }

}

export default withUser
