// prop trilling
// -----------------

import React, { createContext, useContext, useState } from 'react'
const userContext=createContext();

function Event17() {
    const[user]=useState("Amal")


  return (
    <div>
        <userContext.Provider value={user}>
        <h1>hellooo {user}</h1>
        <Component3/>
        </userContext.Provider>
    </div>
  )
}


// function Component2() {
//   return (
//     <div>
        
//     </div>
//   )
// }



function Component3() {
    const usee=useContext(userContext)
  return (
    <div>
        <h1>hiiii {usee}</h1>
    </div>
  )
}





export default Event17