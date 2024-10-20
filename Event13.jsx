import React from 'react'

function Event13() {
    const cars=[
        {id:1,brand:'bmw'},
        {id:2,brand:'audi'},
        {id:3,brand:'ford'},
        {id:4,brand:'ford'}
    ];
    const handleClick=(ID)=>{
        alert(`ID is ${ID}`)
    }
  return (
    <div>
        {cars.map(i=>(<li key={i.id} onClick={()=>handleClick(i.id)}>{i.brand}</li>))}
    </div>
  )
}

export default Event13