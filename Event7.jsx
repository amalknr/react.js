import React from 'react'

function Event7() {
    const cars=[
        {id:1,brand:'bmw'},
        {id:2,brand:'ford'}

    ]
  return (
    <div>
        {cars.map(i=><p key={i.id}>{i.id},{i.brand}</p>)}
    </div>
  )
}

export default Event7