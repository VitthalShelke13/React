import { useState } from "react"
 
const Forms=()=>{
    let userInfo={
        name:"",
        password:"",
        email:""
    }
const[user,setUser]=useState({
    name:"",
    password:"",
    email:""
})
//we want to show submit button only when the user fill all the details for thst we use usestate
const[showDetail,setDetail]=useState(false)
//emty object is always false value 
//we use short circuit operator
    // const handlerName=(e)=>{
    //     userInfo.name=e.target.value
       
    // }
    // const handlerPassword=(e)=>{
    //     userInfo.password=e.target.value
        
    // }
    // const handlerEmail=(e)=>{
    //     userInfo.email=e.target.value 
       
    // }
    // inted using seperate event handler we use common one 
    //we use handlercommon fun for to reduce the code in which we use if else
    const HandlerCommon=(e)=>{
        // if(e.target.id==='name'){
        //     userInfo.name=e.target.value
        // }else if(e.target.id==='password'){
        //     userInfo.password=e.target.value
        // }else if(e.target.id==='email'){
        //     userInfo.email=e.target.value
        // }
//also one way in one liner code for this which is useful please reffer photo
userInfo[e.target.id]=e.target.value
// for this id should be same as object key if not found then it shown undefined
    }
    const printResult=(e)=>{
        
e.preventDefault()
//when we click on submit button by default it get refresh for avoid this we use preventDefault()
//also onSubmit event is add on form tag not on a input tag having submit attribute

setUser(userInfo) 
setDetail(true)
console.log(userInfo)

    }
    return(
<>
<form onSubmit={(e)=>printResult(e)}>
<label htmlFor="name">Name</label><br/>

<input id="name" type="text" onChange={(e)=>HandlerCommon(e)}></input>
<br/><br/>
<label htmlFor="password">Password</label><br/>

<input id="password" type="password" onChange={(e)=>HandlerCommon(e)}></input>
<br/><br/>
<label htmlFor="email">Email</label><br/>

<input id="email" type="text" onChange={(e)=>HandlerCommon(e)}></input>
<br/><br/>
<input type="submit" ></input>

</form>

{showDetail &&(<section>
    <div>Name:{user.name}</div>
    <div>Password:{user.password}</div>
    <div>Email:{user.email}</div>
</section>)}
</>
    )
}
export default Forms