import React from 'react'
// import { useState } from 'react'
import HigherOrederComp from './HigherOrederComp'
//note-always write this value in lower caseses letter
 const Counter = ({hoccounter,incrementcount,decrementcount}) => {
//     const [count,setcount]= useState(0)
//   return (

//     <>
//     <h2>Counter</h2>
//     <div>Count:{count}</div>
//     <button onClick={()=>setcount(count+1)}>Increment</button>
//     <br/> <br/>
//     <button onClick={()=>setcount(count-1)}>decrement</button>

//     </>
//   )
return(
    <>
    <h2>Counter</h2>
    <div>Count:{hoccounter}</div>
    <button onClick={()=>incrementcount()}>Incrementby1</button>
    <button onClick={()=>incrementcount(5)}>Incrementby5</button>
    <br/> <br/>
    <button onClick={decrementcount}>decrement</button>
    </>
)
}
export default HigherOrederComp(Counter)