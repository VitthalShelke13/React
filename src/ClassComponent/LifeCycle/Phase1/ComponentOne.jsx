
import React, { Component } from 'react'

export default class ComponentOne extends Component {
    constructor(props){
      super() // this is for 1st and 3rd
     //super(props) // for second approch
    // this.printName=this.printName.bind(this)
    }
    printName(){
      console.log('printing',this.props.name)
      console.log('name')
    }
    // printName=()=>{
    //   console.log('printing',this.props.name)
    //   console.log('name')
    // }
    render(){
  return (
    <>
    <div>ComponentOne</div>
    <div> name:{this.props.name}</div>
    {/* //1st apporch */}
    <button onClick={()=>this.printName()}>printmyName</button>
    {/* //2nd approch in which we use bind keyword in super function */}
    {/* <button onClick={this.printName}>printmyName</button> */}
    {/* ///3rd approch */}
    {/* <button onClick={this.printName.bind(this)}>printmyName</button> */}
    </>
  )
}
}
