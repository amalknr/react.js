import React from 'react'

function Event2() {
   let count=0 //variable decleare as a local variable react can't recognize local variables
    const increment=()=>{
        count++
        console.log(`count:${count}`)
    }
  return (
    <div>
        <p>count:{count}</p>
        <button onClick={increment}>click me</button>
    </div>
  )
}

export default Event2