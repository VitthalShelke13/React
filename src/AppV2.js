import React, { createContext} from 'react'
// import ClassA from './componentV2/ClassContextApi/ClassA'
// import ClassB from './componentV2/ClassContextApi/ClassB'
// import CompA from './componentV2/ContextAPI/CompA'
// import CompB from './componentV2/ContextAPI/CompB'
import FirstReducer from './componentV2/ReducerHook/FirstReducer'
import SecondReducer from './componentV2/ReducerHook/SecondReducer'
// import FormRefPostData from './componentV2/FormRefPostData'
// import Post from './ClassComponent/componentV2/Post'

export const userContext =createContext({Role:'instrucor',name:'shyam'})
export const adminContext=createContext()
// const user={name:'vitthal',Role:'student'}
// const admin ={Role:'teacher',name:'ram'}

const AppV2 = () => {
  return (
    <>
    <div>AppV2</div>
    {/* <Post/> */}
    {/* <FormRefPostData/> */}
    <FirstReducer/>
    <SecondReducer/>
    {/* <userContext.Provider value={user}>
    <CompA/>
   
    </userContext.Provider>

    <adminContext.Provider value={admin}>
    <CompB/>
    </adminContext.Provider> */}
    {/* <adminContext.Provider value={admin}>
    <ClassA/>
    </adminContext.Provider>
    <br/><br/>
    <userContext.Provider value={user}>
    <adminContext.Provider value={admin}>
    <ClassB/>
    </adminContext.Provider>
    </userContext.Provider> */}
    </>
  ) 
}

export default AppV2

// contex Api is use for solving the complexity or component drilling problem 
// assume if we want to transfer data from parent to nth child its done truogh props in
//traditional way prent->child->child->child-->child-->child 
//in react data flow top to bottom always but if we want to pass data to not a direct child
// from top to last child for that perpose we use context api
// steps of content api
// firstly create  export const user=createContext() 
// then parent componet wrap in provider keyword like this
/* <userContext.Provider value={user}>
<CompA/>
</userContext.Provider>*/
// where we want to data tranfer import that create context file
//paased that file to useContext() function and store it in varible
//context api work on provider and consumer model 
//it work to parent to child
// but it also work no direct relation child to anthoer child which is not direct related
//for that pass the data in createContext() or its called default method