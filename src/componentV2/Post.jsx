import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Loder from './Loder'

  
const Post = () => {
    const[Postdata,setPostdata]=useState([])
    const[loding, setloding]=useState(false)
useEffect(()=>{
    setloding(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
console.log(res.data)
setPostdata(res.data)
setloding(false)
    })
    .catch((e)=>{
        setloding(true)
        console.log(e)
    })
},[])
  return (
    <>
    <div>Post</div>
  {loding?<Loder/>:

   <main>
         { Postdata.map((el)=>{
                return(
                <section key={el.id}>
<div>userid:{el.userId}</div>
<h3>body:{el.body}</h3>
<div>title:{el.title}</div>
                </section>
                )
            })}
            
    </main>} 
    </>
   
  )
}

export default Post