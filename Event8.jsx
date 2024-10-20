import React from 'react'

function Event8() {
    const cars=[
        {id:1,brand:'bmw'},
        {id:2,brand:'ford'}
    ]
  return (
    <div>
        <ol>
            {cars.map(i=><li key={i.id}>{i.id},{i.brand}</li>)}
        </ol>

    </div>
  )
}

export default Event8