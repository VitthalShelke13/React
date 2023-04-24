import React from 'react'
import { useState } from 'react'
//note-- Comp always write in uppercase
 const HigherOrederComp = (Comp) => {
    let Enhancement =()=>{


    const[count,setcount]=useState(0)
    const Increment=(number=1)=>{
        setcount(count+number)
    }
    const Decrement=()=>{
        setcount(count-1)
    }
    return(<Comp hoccounter={count} incrementcount={Increment} decrementcount={Decrement}/>)

    }

return Enhancement

// note number=1 this is javscript code we provide dyanamic look to user due which able to 
// use number of component 

  
  
}
export default HigherOrederComp