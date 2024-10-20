import React, { useState } from 'react'

function Demo2() {
    const [inputs,setInputs]=useState({})

    const handleChange=(event)=>{
        const name=event.target.name
        const value=event.target.value

        setInputs({...inputs,[name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`Name:${inputs.username},Age:${inputs.age}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Enter your name</label>
        <input type='text' name='username' value={inputs.username} onChange={handleChange}/>
        <label>Enter your age</label>
        <input type='text' name='age' value={inputs.age} onChange={handleChange}/>
        <input type='submit'/>
        </form>
    </div>
  )
}

export default Demo2