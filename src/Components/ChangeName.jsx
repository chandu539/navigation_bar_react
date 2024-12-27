import React from 'react'
import { useState } from 'react'

function ChangeName() {
    const[value , setValue]=useState("Chandu")

    const change=()=>{
        setValue("Pandu")
    }

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={change}>click to change the name</button>
    </div>
  )
}

export default ChangeName
