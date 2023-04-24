 import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react' 
import axios from 'axios'
import Useeffecthookfile from './Useeffecthookfile'
 

const UseEffectasync = () => {


    const[post,setpost]=useState([])
//if we not use dependancy [] then it goves in infinite loop interviw question setpost
 // goes in rerendering
//  async function getdata(){
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>{
// console.log(res.data)
// setpost(res.data)
//     })
// }
    useEffect(()=>{
    // getdata()
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
console.log(res.data)
setpost(res.data)
    })
    },[])
    
  return (
    <>
    <div>UseEffectasync</div>
    {/* <div>post:{post.data}</div> */}
 <section>
    {post.map((data)=>{
        return(
            <>
            <div key={data.id}></div>
            {/* <div> name:{data.title}</div> */}
<Useeffecthookfile userid={data.userId} id={data.id} title={data.title}  body={data.body}/>
            </>
        )
    })}
 </section>
 {/* <button onClick={getdata}>tt</button> */}
    </>
  )
}

export default UseEffectasync