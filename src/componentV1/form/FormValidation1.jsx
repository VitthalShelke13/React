import React from 'react'
import { useState } from 'react'
import style from './FormValidation.module.css'

export const FormValidation1 = () => {
    let intialobj={
username:'',
email:'',
password:'',
confirmPassword:''
    }

    let Initialvalue={
        username:'',
        email:'',
        password:'',
        confirmPassword:''
            }
    const[signupValidation,setValidation]=useState(intialobj)
//signuperrorValidation this is use for the to condition error
    const[signuperrorValidation,setsignuperrorValidation]=useState({
        usernameError:'',
        emailError:'',
        passwordError:'',
        confirmPasswordError:''})

function handlerUsernameError(){
    if(signupValidation.username===""){
        setsignuperrorValidation({...signuperrorValidation,usernameError:'please Enter Username'})
    }else if(signupValidation.username.length<6){
        setsignuperrorValidation({...signuperrorValidation,usernameError:'must have atlest 6 charector'})
    }else{
        setsignuperrorValidation(Initialvalue)
    }

    }


    const submitHandler=(e)=>{
e.preventDefault()
handlerUsernameError()
    }

const handleuserChange=(e)=>{
    setValidation({...signupValidation,[e.target.id]:e.target.value})
    
}
  return (
    <>
    <div>FormValidation</div>
    <form className={style.container} onSubmit={submitHandler} >
<label htmlFor='username'>Username:</label>
<input type="text" 
id='username' value={signupValidation.username}
placeholder='username' onChange={(e)=>handleuserChange(e)}></input>

<div>{signuperrorValidation.usernameError}</div>

<label htmlFor='email'>Email:</label>
<input type="text"
 id='email' value={signupValidation.email}
 placeholder='email' onChange={(e)=>handleuserChange(e)}></input>
  <div>{signuperrorValidation.emailError}</div>

 <label htmlFor='password'>password:</label>
<input type="password"
 id='password' value={signupValidation.password}
 placeholder='password' onChange={(e)=>handleuserChange(e)}></input>
 <div>{signuperrorValidation.passwordError}</div>

 <label htmlFor='confirmPassword'>confirmPassword:</label>
<input type="password" 
id='confirmPassword' value={signupValidation.confirmPassword}
placeholder='confirmPassword' onChange={(e)=>handleuserChange(e)}></input>
<div>{signuperrorValidation.confirmPasswordError}</div>
{signupValidation.confirmPassword!== signupValidation.password ?<div>password not match</div>:null}
<button>submit</button>

    </form>
    </>
  )
}
// value={signupValidation.username} it is use for binding perpose control form without 
//it not any issue
// we dont use object reffrence because we already inside in object
//[e.target.id] this is use because we dont known value 
// in this apprch we use error showing how to show it
//!signupValidation.confirmPassword&& this short circuit operator use to go error when type 
// somthing in input
// one is another way  {!signupValidation.password&& <div>please Enter password</div>} we can
// pass condition using usestate which  
//Passord validator steps
//should not be empty
//min and  max length
//for confirm password -->should be same as password-confirm password

//email validator
//must be include @ symbol for which use include method or searching it is a task


// regex logic
// const emailvalidate=(email)=>{
//     /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

// }
//// }else if(!emailvalidate(login.email)){
//    setloginerror({...loginerror,emailerror:'please Enter the Valid email'}) 
