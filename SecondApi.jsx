import React, { useEffect, useState } from 'react'
import axios from 'axios';

function SecondApi() {
    const[data,setData]=useState([])
    const[error,setError]=useState(null)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        dataFetch();
    },[])


    const dataFetch=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
    
    .then(response=>{
        setData(response.data)
        console.log(data)
        setLoading(false)
    })

    .catch(error=>{
        setError(error)
        setLoading(false)
    })
}
    if(loading){
        return <p>Loading.........</p>
    }
    if(error){
        return <p>Error:{error.message}</p>
    }
  return (
    <div>
        <ul>
            {data.map(post=>(<li key={post.id}><h1>{post.title}</h1>
            <p>{post.body}</p></li>))}
        </ul>
    </div>
  )
}

export default SecondApi