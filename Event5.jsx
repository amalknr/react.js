import React from 'react'

function Event5(props) {
  return (
    <div>
        {props.isloggedIn && <p>Welcome ! user</p>}
        {!props.isloggedIn && <p>Please Logged In</p>}
    </div>
  )
}

export default Event5