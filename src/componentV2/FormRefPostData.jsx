import axios from 'axios'
import React from 'react'
import { useRef } from 'react'

const FormRefPostData = () => {
const nameref=useRef()
const emailref=useRef()

    const userinfo=(e)=>{
        e.preventDefault()
    //    console.log('name ref-->', nameref.current.value) 
    //    console.log('email ref-->', emailref.current.value) 
    let userdata={
        username:nameref.current.value,
        email:emailref.current.value
    }
    // console.log(userdata)
    axios.post('https://jsonplaceholder.typicode.com/posts',userdata)
    .then((res)=>{
        console.log(res)
    }).catch((e)=>{
console.log('for error',e)
    })
    }
   
  return (
    <>
    <form onSubmit={(e)=>userinfo(e)}>
        <label htmlFor='username'>username</label>
        <input id="username"type="text" ref={nameref}></input>
        <label htmlFor='email'>email</label>
        <input id="email"type="text"  ref={emailref}></input>
        <button>submit</button>
    </form>
    </>
  )
}

export default FormRefPostData