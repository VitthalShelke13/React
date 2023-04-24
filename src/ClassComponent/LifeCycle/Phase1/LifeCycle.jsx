import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props){
        //constructor give access to props and intialise state
        super()
        console.log('constructor getting called')
        //runs when component get created 
        //initialize the state
        //using super(props) getting access to props passed
        //binding of method or handlers
        //any [side-effect] is not allowed-asynchronus not do in construcror
    }
   static getDerivedStateFromProps(){
        console.log(' getDerivedStateFromProps getting called')
        return null
    }
    componentDidMount(){
        console.log('componentDidMount getting called') 
    }
    //render show things in ui
  render() {
    console.log('render getting called') 
    return (
        <>
      <div>LifeCycle</div>
      </>
    )
  }
}
//phase 1 life cycle method
//1-constructor get called
//getDerivedstatefromprops()
//render()
//component did mount()