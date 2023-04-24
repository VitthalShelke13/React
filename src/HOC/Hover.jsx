import React from 'react'
import { useState } from 'react'

export const Hover = () => {
    const [count,setcount]= useState(0)
  return (

    <>
    <h2>HoverCount</h2>
    <div>Count:{count}</div>
    <button onMouseOver={()=>setcount(count+1)}>Increment</button>
    <br/> <br/>
    <button onMouseOver={()=>setcount(count-1)}>decrement</button>

    </>
  )
}
