import React from 'react'
import { useContext } from 'react'
import {adminContext} from '../../AppV2'
const CompF = () => {
    const user2= useContext(adminContext)
    
  return (
    <>
    <div>CompF</div>
    <div>Role:{user2.name}</div>
    <div>CompF:{user2.Role}</div>
    </>
  )
}

export default CompF