import React from 'react'
import { useContext } from 'react'
import { Player } from './PlayerProvider'

const Consumer2 = () => {
  const PlayerInfo2= useContext(Player)
  return (
  <>
  <div>Consumer2</div>
    <div>name:{PlayerInfo2.name}</div>
  </>
  )
}

export default Consumer2