import React from 'react'
import { useState } from 'react'

export const Forms2 = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[pin,setPin]=useState('')
  return (
    <>
    <h2>Pressent Address</h2>
    <form>
        StreetName:
        <input type='text'placeholder='Enter Street Name' value={name} onChange={(e)=>setName(e.target.value)}></input> <br/>
        City:
        <input type='text' placeholder='Enter the City' value={email} onChange={(e)=>setEmail(e.target.value)}></input> <br/>
        pin:
        <input type='text' placeholder='Enter the pin' value={pin} onChange={(e)=>setPin(e.target.value)}></input>
        <div>Name:{name}</div>
        <div>Email:{email}</div>
        <br/> <br/>
    </form>
    <input type="checkbox"></input>
    </>
  )
}
