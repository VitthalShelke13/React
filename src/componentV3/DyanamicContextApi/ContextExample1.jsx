import React from 'react'
import { useContext } from 'react'
import {player} from '../../AppV3'
const ContextExample1 = () => {
    const playerDetail=useContext(player)
  return (
   <>
    <div>ContextExample1</div>
    <div>name:{playerDetail.value.name}</div>
    <div>game:{playerDetail.value.game}</div>
    <button onClick={()=>playerDetail.updater({name:'dravid',game:'cricket'})}>ContextExamle1</button>
   </>
  )
}

export default ContextExample1