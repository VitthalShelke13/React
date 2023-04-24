import React from 'react'
import CompD from './CompD'
import { userContext } from '../../AppV2'
import { useContext } from 'react'
const CompB = () => {
    const user3=useContext(userContext)
  return (

    <>
  
  <div>CompB:{user3.name}</div>
  <div>CompB:{user3.Role}</div>
    <CompD/>
    </>
  )
}

export default CompB