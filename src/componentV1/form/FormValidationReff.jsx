import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import style from './FormValidation.module.css'

export const FormValidationReff = () => {

    let initialValue={
        usernameError:'',
        emailError:'',
        passwordError:'',
        confirmPasswordError:''}
    const[signuperrorValidation,setsignuperrorValidation]=useState(initialValue)

    const usernameReff=useRef();
    const emailReff=useRef();
    const passwordReff=useRef();
    const confirmPassword=useRef();
    function usernameHandler(){
if(usernameReff.current.value===""){
    setsignuperrorValidation({...signuperrorValidation,usernameError:'please enter the user name'})
}else if(usernameReff.current.value.length<6){
    setsignuperrorValidation({...signuperrorValidation,usernameError:'username atleast contain 6 letter'})
}else{
    setsignuperrorValidation(initialValue)
}
    }


    function submitHandler(e){
        e.preventDefault()
     usernameHandler()
    }
  return (
    <>
     <form className={style.container} onSubmit={submitHandler} >
<label htmlFor='username'>Username:</label>
<input type="text" 
id='username'
placeholder='username' ref={usernameReff} onBlur={usernameHandler} ></input>
<div>{signuperrorValidation.usernameError}</div>


<label htmlFor='email'>Email:</label>
<input type="text"
 id='email' 
 placeholder='email' ref={emailReff} ></input>
 

 <label htmlFor='password'>password:</label>
<input type="password"
 id='password' 
 placeholder='password'ref={passwordReff}  ></input>
 

 <label htmlFor='confirmPassword'>confirmPassword:</label>
<input type="password" 
id='confirmPassword' 
placeholder='confirmPassword' ref={confirmPassword} ></input>

<button>submit</button>

    </form>
    </>
  )
}
