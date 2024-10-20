import React, { useState } from 'react'

function Event14() {
    const[count,setCount]=useState(0)

    const increment=()=>{
        setCount(count+1)
        console.log(`count:${count}`)
    }
  return (
    <div>
        <p>count:{count}</p>
        <button onClick={increment}>click me</button>
    </div>
  )
}

export default Event14