import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate();

    function handleClick(){
        navigate('/login',
            {state:
                {name:"Amal",Age:25}

        })
    }

  return (
    <div>
        <h1>This is the home page</h1>
        <button type='button' onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Home