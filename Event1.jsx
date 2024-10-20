import React from 'react'

function Event1() {
    const handleClick=()=>{
        alert("button Clicked")
    }
  return (
    <div>
        <button type='button' onClick={handleClick}>click me</button>
    </div>
  )
}

export default Event1