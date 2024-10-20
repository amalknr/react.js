import React from 'react'

function Event10() {
    const cars=[
        {id:1,brand:'bmw'},
        {id:2,brand:'audi'},
        {id:3,brand:'ford'},
        {id:4,brand:'ford'}
    ]
    const filval=cars.filter(i=>(i.brand==='ford'));
    console.log(filval)
  return (
    <div>
        {filval.map(i=><h1 key={i.id}>{i.id},{i.brand}</h1>)}
    </div>
  )
}

export default Event10