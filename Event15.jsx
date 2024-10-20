import React, { useEffect, useState } from 'react'

function Event15() {
    const[count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
        
    }
    console.log(`count:${count}`)

    // const function add(){
    //     const a=10
    //     const b=20
    //     const sum=a+b
    //     console.log(sum)
    // }

    useEffect(()=>{
        const a=10
        const b=20
        const sum=a+b
        console.log(sum)
    },[]) //[]empty array dependency
  return (
    <div>
        <p>Count:{count}</p>
        <button type='button' onClick={increment}>Click me</button>
    </div>
  )
}

export default Event15