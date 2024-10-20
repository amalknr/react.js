import React from 'react'

function Event12() {
    const cars=[
        {id:1,brand:'bmw'},
        {id:2,brand:'audi'},
        {id:3,brand:'ford'},
        {id:4,brand:'ford'}
    ]
  return (
    <div>
        {cars.map(i=>(i.brand==='ford')?<p>This is ford</p>:<p>this is not ford</p>)}
    </div>
  )
}

export default Event12