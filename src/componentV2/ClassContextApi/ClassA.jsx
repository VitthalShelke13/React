import React from 'react'
import { Component } from 'react'
import {adminContext} from '../../AppV2'
export class ClassA  extends Component{
    render(){
        return(
            <>
            <div>ClassA Component</div>
            <adminContext.Consumer>
        {
            (myuser)=>{
return(
    <>
    <div>name:{myuser.name}</div>
    <div>name:{myuser.Role}</div>

    </>
)
            }
        }
            </adminContext.Consumer>

            </>
        )
    }
  
}
export default ClassA
// class componet also like functional componet only difference is that it takes consumer
//wrapper during use like functional componet we also wrapp it in proivde wrapper
// also in class component we use callabck for accesing a data
// also we can wrapp single class compoent in multiple wrapper
//before 16.8 version of the react class context we use Class context api
//for multiple consumer wrapper form callback hell patern for solving this complexcity
// useContext() introduced