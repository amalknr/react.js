import React from 'react'

function Event6(props) {
  return (
    <div>
        {props.isloggedIn?<p>Welcome ! user</p>:<p>Please logged In</p>}
    </div>
  )
}

export default Event6