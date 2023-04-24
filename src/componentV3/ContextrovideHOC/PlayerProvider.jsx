import React from 'react'
import {  createContext} from 'react'
// export  const Player = createContext(defaultvalue)
//we dont able to write default value outside thecontext for solving use javascript logic
let Player;
 const PlayerProvider = ({children,value,defaultvalue}) => {
  Player=createContext(defaultvalue)
  return (
  <>
  {/* <Player.Provider value={{name:'Dhoni',game:'Cricket'}}>
{children}
  </Player.Provider> */}
  <Player.Provider value={value}>
{children}
  </Player.Provider>
 
  </>

  )
}

export  {PlayerProvider,Player}
//note--> dont use default exporter in HOC 

// //<Player.Provider value={{name:'Dhoni',game:'Cricket'}}>
// {children}
// </Player.Provider>
// for custmising we pass value to playerprovider in appv3.js 
//playerprovider work Hoc we use it in both consumer and consumer2 file and we able to use anywhere
// there is no need to write three steps evey time for new component contextapi
// //<PlayerProvider value={{name:'pant',game:'Cricket'}}>
// <Consumer2/>
// </PlayerProvider>
//we direct assing value in playerProivder not in hoc we custimize it
//also we can provide default value as third argument
