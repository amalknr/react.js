import React from 'react'

function Child(props) {
  return (
    <div>
        <h1>{props.a+props.b}</h1>
    </div>
  )
}

export default Child