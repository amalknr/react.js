import React, { useRef, useState } from 'react'

function useRef1() {
    const[count,setCount]=useState(0)
    const countRef=useRef(0);

    const incrementstateCount=()=>{
        setCount(count+1)
    }
    const incrementRefCount=()=>{
        countRef.current=countRef.current + 1;

        console.log(`Ref Count:${countRef.current}`)
    }
  return (
    <div>
        <h2>useStateExample</h2>
        <p>State count:{count}</p>
        <button onClick={incrementstateCount}>IncrementStateCount</button>
        <h2>useRefExample</h2>
        <p>Ref Count: {countRef.current}</p>
        <button onClick={incrementRefCount}>IncrementStateCount</button>
    </div>
  )
}

export default useRef1