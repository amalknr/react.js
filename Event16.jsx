// prop trilling
// -----------------

import React, { useState } from 'react'

function Event16() {
    const[user,setUser]=useState("Amal")

  return (
    <div>
        <h1>hellooo {user}</h1>
        <Component2 name={user}/>
        
    </div>
  )
}


function Component2(props) {
  return (
    <div>
        <h1>hiiiii {props.name}</h1>
        <Component3 name={props.name}/>
    </div>
  )
}



function Component3(props) {
  return (
    <div>
        <h1>hoool {props.name}</h1>
    </div>
  )
}





export default Event16