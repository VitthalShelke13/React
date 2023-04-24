import React, {useState} from 'react'

const StateExampleRef =()=>{
    const[UserInfo,Setname]=useState({
        name:'vitthal',
        address:'buldana',
        role:'student'
    })
    const [numbers,Setnumber]=useState([1,2,3])
    const handler=()=>{
        console.log(`before`,numbers)
        numbers.push(numbers[numbers.length-1]+1)
        console.log(`after`,numbers)
        // let newnum=numbers
        // it will not work because newnum have same reffrece and also number directly not pass
        // becuse number get upadted and which not equal to before and after
        // Setnumber(newnum)
        //let newnem=[ ...numbers]
        Setnumber([...numbers])
    }
    
    return(
        <>
        <div> StateExample </div>
        <div>name:{UserInfo.name}</div>
        <button onClick={()=>Setname({...UserInfo, name:'Rahul'})}>change name</button>
        <div>name:{UserInfo.address}</div>
        <button onClick={()=>Setname({...UserInfo,address:'pune'})}>change address</button>
        <div>name:{UserInfo.role}</div>
        <button onClick={()=>Setname({...UserInfo,role:'Instructor'})}>change role</button>
<div>numbers:{numbers}</div>
<button onClick={handler}>upadate number</button>
        </>
    )
}

export default StateExampleRef
// if we upaded the name value it get updated but adress and role showing emty bse it upadate 
// hole object for solving this issue we use spred operator
//spred operator extract copy of object