import React from 'react'
import Child1 from './Child1'
function Parant1() {
    const Age=25
  return (
    <div>
        <Child1 Myage={Age}/>
    </div>
  )
}

export default Parant1