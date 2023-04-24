import React, { Component } from 'react'

export default class StateExmpleCl extends Component {
    constructor(props){
        super()
        this.state={
            productName:'mobile',
            prize:'2000',
            rating:'4'
        }
    }

    // in class component we use state in constructor and also we create this.state
     updateprize=()=>{
        // console.log(this.state)
        // this.state={
        //     productName:'mobile-samsung',
        //     prize:'4000' 
        // }
         
        // console.log(this.state)

    //this set is ascychronus call
        this.setState({
            // productName:'mobile-samsung',
            ...this.state,
            prize:'4000' 
        })
        //this is fix compoennt in class setState function
        // in which we also able to pass single value other value not desable
        // but best practice use object 
    }
   
    
  render() {
    // console.log(this.state) // this give upadted value when we render
    return (
        <>
      <div>Product list</div>
      <div>name:{this.state.productName}</div>
      <div>prize:{this.state.prize}</div>
      <div>rating:{this.state.rating}</div>
      <button onClick={this.updateprize}>Change Product</button>
      </>
    )
  }
}
 