import React, { useState } from 'react'

function Formmulti() {
    const [inputs,setInputs]=useState({})
    const handleChange=(event)=>{
      const name=event.target.name
      const value=event.target.value
      setInputs({...inputs,[name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`Name :${inputs.username},Age:${inputs.age}`)
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='flname'>Enter your Name</label>
        <input type='text' name='username' value={inputs.username ||""} onChange={handleChange}/>
        <label htmlFor='flname'>Enter your Age</label>
        <input type='text' name='age' value={inputs.age ||""} onChange={handleChange}/>
        <input type='submit'/>
    </form>
  )
}

export default Formmulti