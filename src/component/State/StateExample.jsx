//  import React from 'react'
 import React, {useState} from 'react'
 export const StateExample=()=>{
    // let count =0;
    //firt variable(count) is i nitial value
    // second is setter function of the first varable-->updated
    const [count,setCount]= useState(0)
    const increment=()=>{
        // count =count+1
        console.log(`count before `,count)
        setCount(count+1)//web api
        console.log(`count after `,count)
    }
    const decrement=()=>{
        // count =count-1
        setCount(count-1)
        console.log(count)
    }
    console.log(`rendering `,count)

    return(
        <>
        <div>stateExample</div>
        <div> count: {count}</div>
        <button onClick={increment}>+</button>
        <br/>
        <br/> 
        <button onClick={decrement}>-</button>
        </>
    )

 }
 //value get render in console after clicking on button onclick but not on browser
 // for solving this problem we use state 
 //  setout call is asychronous in nature thats why in console value not upadted after clinking 
 // 