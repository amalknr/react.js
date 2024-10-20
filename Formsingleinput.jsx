import React, { useState } from 'react'

function Formsingleinput() {
    const [name,setName]=useState("")
    const handleChange=(event)=>{
      setName(event.target.value)

    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='flname'>Enter your Name</label>
        <input type='text' id='flname'value={name} onChange={handleChange}/>
        <input type='submit'/>
    </form>
  )
}

export default Formsingleinput