import React, { Component } from 'react'

export default class LifeCycleUpdationPhase extends Component {
    constructor(props){
        console.log('constructor getting called')
        super(props)
        this.state={
            Count:0
        }
    }
    //when state is depends upon the props then we will use this
    static getDerivedStateFromProps(){
        console.log(' getDerivedStateFromProps getting called')
        return null
    }
    //performance optimization
    //it return true it will go ahead and run further method
    //but if we return false it won't go ahed
    shouldComponentUpdate(){
        console.log(' shouldComponentUpdate getting called')
        return true
    }
    //before sending the changes found out by compiring the virchual doms to real doms
    // capture  a data or information
getSnapshotBeforeUpdate(){
    console.log(' etSnapshotBeforeUpdate getting called')
    return null
}
componentDidUpdate(){
    console.log(' componentDidUpdate getting called')
}
componentDidMount(){
    console.log('componentDidMount getting called')
}
 Increment=()=>{
    this.setState({...this.state,Count:this.state.Count+1})
}
  render() {
    console.log('render getting called') 
    return (
        <>
      <div>LifeCycleUpdationPhase</div>
      <div>Count:{this.state.Count}</div>
      <button onClick={this.Increment}>Update</button>
      </>
    )
  }
}
// updation phase-component gets updated/rerenderd
//reason
//1-updating the states-set states
//2-changing of props/updating of props
//when parrent component rerenderd

 // methods
 //1-getderivedStateFromProps
 //2-shouldComponentUpadate
 //3-render
 //4-getSnapShotBeforeUpdate
 //5-compoenentDidUpdate