import React, { useEffect, useState } from 'react'

function Api1() {
    const[data,setData]=useState([])
    const[error,setError]=useState("null")

    useEffect(()=>{
        dataFetch()
    },[])


    const dataFetch=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
    
    .then(response=>{
        console.log(response)
        return response.json()
    })

    .then(data=>{
        setData(data)
        console.log(data)
    })

    .catch(error=>{
        setError(error)
    })
}
  return (
    <div></div>
  )
}

export default Api1