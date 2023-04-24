import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react' 


const UseEffect = () => {
    const[count1, setcount1]=useState(0)
    const[count2,setcount2]=useState(10)
    const[count3,setcount3]=useState(50)
   

    useEffect(()=>{
        console.log('this is the count1')
    })

    //if we want it work only one time passed second argument as empty array
    useEffect(()=>{
        console.log('this is the count2')
    },[count2])

    useEffect(()=>{
        console.log('this is the count3')
    },[count1,count3])
//componentwillUnmount
//useexample removal show component 

    useEffect(()=>{
        return()=>{
        console.log('unmounting phase')}
    },[])
    
 
// function counter(){
//     setcount(count+1)
// }
  return ( 
    <>
    <h2>UseEffect</h2>
    <div>Count1:{count1}</div>
    <button onClick={()=>setcount1(count1+1)}>count1</button>
    {/* <button onClick={counter}>count</button> */}
    <div>Count2:{count2}</div>
    <button onClick={()=>setcount2(count2+1)}>count2</button>
    <div>Count3:{count3}</div>
    <button onClick={()=>setcount3(count3+1)}>count3</button>
    
    </>
  )
}

export default UseEffect

// useeffect is a combination of multiple life cycle
//it takes two argument
//1-callback
//2-dependancy array 
//<---running condition-->
//only once --[]empty as dependency
//everytimepass-->nothing/dont pass depedancy array
//baced on some variable if we want to run we can pass as argument

// async program stuff can not be useble in usesate it is usable in only class
// for solving this problem useeffect is introduced
//useeffect work in both pahses life cycle it work in three phaces
//componentdidmount()--work in creation phase only in class component--only side effect allow
//componentdidupdate()--work in updation phase only in class component--only side effect allow
// componentwillUnmount()--work in unmounting phase like unmounting phase example reffreres