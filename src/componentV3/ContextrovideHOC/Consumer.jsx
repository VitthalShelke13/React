import React from 'react'
import ConsumerLevel1 from './ConsumerLevel1'
import {Player} from './PlayerProvider'
import { useContext } from 'react'
const Consumer = () => {
    const PlayerInfo= useContext(Player)
  return (
    <>
    <div>Consumer</div>
    <div>name:{PlayerInfo.name}</div>
    <ConsumerLevel1/>
    </>
  )
}

export default Consumer