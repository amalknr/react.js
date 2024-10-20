import React from 'react'

function Event11() {
    const cars=[
        {id:1,brand:'bmw'},
        {id:2,brand:'audi'},
        {id:3,brand:'ford'},
        {id:4,brand:'ford'}
    ]
  return (
    <div>
        {cars.filter(i=>(i.brand==='ford')).map(j=><h1 key={j.id}>{j.id},{j.brand}</h1>)}
    </div>
  )
}

export default Event11