import React from 'react'
import { useState } from 'react'

export const AddressForm = () => {

    let initialvalue={
        street:'',
        city:'',
        pin:''

    }
    const[pressentAdd,setPressent]=useState({
        street:'',
        city:'',
        pin:''
    })

    const[permanentAdd,setPermanent]=useState({
        street:'',
        city:'',
        pin:''
    })
    const permanentHandler=(e)=>{
         if(e.target.checked){
            setPermanent(pressentAdd)
         }else{
            setPermanent(initialvalue)
        
         }
        
    }
    
  return (
    <>
    <h2>Present Address</h2>
    <form>
    Street:
        <input type='text' value={pressentAdd.street} onChange={(e)=>setPressent({...pressentAdd, street: e.target.value})}></input><br/><br/>
        City:
        <input type='text' value={pressentAdd.city} onChange={(e)=>setPressent({...pressentAdd, city: e.target.value})}></input><br/><br/>
        pin:
        <input type='text' value={pressentAdd.pin} onChange={(e)=>setPressent({...pressentAdd, pin: e.target.value})}></input><br/><br/>
        <div>street:{pressentAdd.street}</div>
        <div>city:{pressentAdd.city}</div>
        <div>pin:{pressentAdd.pin}</div>
    </form>
    <br/><br/>
    <input type="checkbox" onClick={permanentHandler}></input>
    <h2>Permanent Address</h2>
<form>
        Street:
        <input type='text' value={permanentAdd.street} onChange={(e)=>setPermanent({...permanentAdd, street: e.target.value})}></input><br/><br/>
        City:
        <input type='text' value={permanentAdd.city} onChange={(e)=>setPermanent({...permanentAdd, city: e.target.value})}></input><br/><br/>
        pin:
        <input type='text' value={permanentAdd.pin} onChange={(e)=>setPermanent({...permanentAdd, pin: e.target.value})}></input><br/><br/>
</form>
    </>
  )
}
