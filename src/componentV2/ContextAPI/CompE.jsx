import React, { useContext } from 'react'
import {userContext} from '../../AppV2.js'
const CompE = () => {
    const user = useContext(userContext)
  return (
    <>
    <div>CompE :{user.name}</div>
    <div>CompE :{user.Role}</div>
    </>

  )
}

export default CompE