import React from 'react'
import { useReducer } from 'react'
const SecondReducer =()=>{
    let InitialCount= {
count1:0,
count2:10
    }
    const CountUpdater=(state,action)=>{
        if(action.count1==='count1'){
          return {...state,
            count1:state.count1+action.value}
        }else if(action==='count2'){
            return {...state,count2:state.count2+1}
        }

    }
    const[Counter,dispatch]=useReducer(CountUpdater,InitialCount)
    
    return(
        <> 
        <div>Counter:{Counter.count1}</div>
        <button onClick={()=>dispatch({count1:'count1',value:2})}>count1+by2</button>
        <button onClick={()=>dispatch({count1:'count1',value:5})}>count1+by5</button>
        <div>Counter:{Counter.count2}</div>
        <button onClick={()=>dispatch('count2')}>count2+by5</button>
        </>
    )
}
export default SecondReducer