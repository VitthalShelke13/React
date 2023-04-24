import React, { useState } from 'react'
import { useReducer } from 'react'

const FirstReducer = () => {
    let initialvalue=10
   const Reducerfunction=(state,action)=>{
if(action==='add'){
    return state+1
}else if(action==='sub'){
    return state-1
}
   }
//1reducerexample one 
//usereducer work like reduce function in js
//hook
//can be useState
const[redcount,dispatch]=useReducer(Reducerfunction,initialvalue)
const[count,setcount]=useState(0)
//reducer example 2

const ReducerFn=(state, action)=>{
    switch(action){
        
    case 1:
        return 'vhollyball'
        case 2:
            return 'football'
            case 3:
                return 'badminton'
                case 4:
                    return 'cricket'

                default:
                    
    }

 }
 const InitialGame='cricket'
const[game,dispatchgame]=useReducer(ReducerFn,InitialGame)
  return (
    <>
    <h2>Reducerhook using</h2>
    <div>redcount:{redcount}</div>
<button onClick={()=>dispatch('add')}>Reducer+</button>
<button onClick={()=>dispatch('sub')}>Reducer-</button>
<h2>useState using</h2>
    <div>useState:{count}</div>
<button onClick={()=>setcount(count+1)}>setcount+</button>
<button onClick={()=>setcount(count-1)}>setcount-</button>
<div>useState:{game}</div>
<button onClick={()=>dispatchgame(Math.ceil(Math.random()*4))}>gameShower+</button>

    </>
  )
}

export default FirstReducer

//<button onClick={()=>dispatch('sub')}>+</button>
//use callback here becuse it goes infinte loop

//<---note-->
// let arr=[3,4,5,6,8] //-->pre3-->cur4-->pre7-->curr5--->pre12--->curr6-->pre18-->cur8-->26
// let res=arr.reduce((pre,cur)=>{
//     console.log('pre',pre)
//     console.log('curr',cur)
//     return pre+cur
// },10)//-->pre10-->cur3-->pre13-->curr4-->pre17-->curr5-->pre22-->cur6-->pre28-->cur8->36
// console.log(res)
//reducer convert multiple value in single value
// reduce work like this it takes two arrgument aargument if we not passed it takes initial
//value as previous value and second value is currnt value 
// if we pass initial value after callback it takesvit as initial value and first one takes
//current value
