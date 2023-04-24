import React, { createContext, useState } from 'react'
import Consumer from './componentV3/ContextrovideHOC/Consumer'
import Consumer2 from './componentV3/ContextrovideHOC/Consumer2'
import {PlayerProvider} from './componentV3/ContextrovideHOC/PlayerProvider'
import ContextExample1 from './componentV3/DyanamicContextApi/ContextExample1'
import ContextExample2 from './componentV3/DyanamicContextApi/ContextExample2'
export const player = createContext()
const AppV3 = () => {
    const[playerValue,setplayerValue]= useState({name:'dhoni',game:'cricket'})
  return (
   <>
    {/* <div>AppV3</div>
    <player.Provider value={playerValue}>
 <ContextExample1/>
 <ContextExample2/>
    </player.Provider>
    <button onClick={()=>setplayerValue({game:'kohli',name:'cricket'})}>changeplayer</button> */}
    <div>AppV3</div>
    <player.Provider value={{value:playerValue,updater:setplayerValue}}>
 <ContextExample1/>
 <ContextExample2/>
    </player.Provider>
    <button onClick={()=>setplayerValue({game:'kohli',name:'cricket'})}>changeplayer</button>
<br/><br/>
<div>PlayerproviderHoc</div>
<PlayerProvider value={{name:'Gill',game:'Cricket'}} defaultvalue={{name:'ganguly'}}>
   <Consumer/>
</PlayerProvider>
<br/><br/>
<PlayerProvider value={{name:'pant',game:'Cricket'}}>
   <Consumer2/>
</PlayerProvider>
    
   </>

  )
}

export default AppV3 