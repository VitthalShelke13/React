import React, { Component } from 'react'

export default class LifeCycleRemovalPhase extends Component {
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

    componentWillUnmount(){
        console.log(' componentWillUnmount getting called')
    
    }
    

componentDidMount(){
    console.log('componentDidMount getting called')
}

 
  render() {
    console.log('render getting called') 
    return (
        <>
      <div>LifeCycleRemovalPhase</div>
      
      </>
    )
  }
}

//unmounting phase--the component get removed from the dom
//method -component willunmount