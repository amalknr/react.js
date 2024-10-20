import React from 'react'

function Event9() {
    const cars=[
        {id:1,brand:'bmw'},
        {id:2,brand:'ford'}
    ]
  return (
    <div>
        <ul>
            {cars.map(i=><li key={i.id}>{i.id},{i.brand}</li>)}
        </ul>
    </div>
  )
}

export default Event9