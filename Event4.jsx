import React from 'react'

function Event4(props) {
    if(props.isloggedIn){
        return <p>Welcome ! user</p>
    }
    else{
        return <p>please logged In</p>
    }
}

export default Event4