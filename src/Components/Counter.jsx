import React from 'react'
import { useState } from 'react'

function Counter() {
    let a=0
    const[value ,setValue]=useState(a)
     


    const increment=()=>{
        setValue(value + 1)
    }

    const decrement=()=>{
        setValue(value - 1)
    }

    const Reset=()=>{
      setValue(0)
    }

  return (
    <div>
        <h1>intial value is: {a}</h1>
        <h1>Updatin value is :{value}</h1>
        
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={Reset}>Reset</button>
     
    </div>
  )
}

export default Counter
