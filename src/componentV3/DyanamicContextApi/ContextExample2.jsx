import React from 'react'
import { useContext } from 'react'
import {player} from '../../AppV3'
const ContextExample2 = () => {
    const playerDetail=useContext(player)
  return (
   <>
    <div>ContextExample2</div>
    <div>name:{playerDetail.value.name}</div>
    <div>game:{playerDetail.value.game}</div>
    <button onClick={()=>playerDetail.updater({name:'ronaldo',game:'football'})}>ContextExamle1</button>
   <br/><br/>
   </>
  )
}

export default ContextExample2

//  {playerDetail.value.name} we use because  nested object
//value={{value:playerValue,updater:setplayerValue}}> 
//player value initially is a object due to which nested firm thats wy we use 