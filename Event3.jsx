import React from 'react'

function Event3() {
    const handleClick=(name)=>{
        alert(`my name is ${name}`)
    }
  return (
    <div>
        <button type='button' onClick={()=>handleClick("Amal")}>Click Me</button>
    </div>
  )
}

export default Event3