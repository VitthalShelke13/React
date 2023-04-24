import React, { Component } from 'react'
import axios from 'axios'

export default class ExampleOfMethod extends Component {
    constructor(props){
        super(props)
        this.state={
            fullname: this.props.myname + ` title`
        }
    }
    static getDerivedStateFromProps(props, state){
      return{
        fullname:props.myname + ` title`
    } 
    
    }
    // both method work in deffrent phases
// get drived run one times but shouldcommethod render always udation
    shouldComponentUpdate(props, state){
        if(props.fullname==='sonu'){
            return false
        }else{
            return true
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
console.log(res.data)
        })
    }
   
  render() {
    return (
        <>
      <div>ExampleOfMethod</div>
      <div>name without title---props:{this.props.myname}</div> 
      <div>name with title---state:{this.state.fullname}</div>
      </>
    )
  }
}
