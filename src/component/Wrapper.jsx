import React from 'react'
 const Wrapper = (props)=>{
    console.log(props)
    console.log(props.nums)
    // function myfunction(){
    //     console.log('myfunction called')
    // }
    const myfunction=()=>{
        console.log('myfunction called')
    }
    const printname =(name)=>{
        console.log(`my function called by ${name} `)//template leterals
    }
    // myfunction()//note use because function gate atomaticaly call which is we dont need
    // printname() // we need after action we can done 
    return(
        <>
        <div><h1> Wrapper </h1> </div>
        <div>Username:{props.obj.Username}</div>
        <div>Role:{props.obj.Role}</div>
        <div>Nums:{props.nums}</div>
        {/* <div>Username1:{props.obj.Username1}</div>
        <div>Role:{props.obj.role}</div> */}
        {/* <div>Array:{props.array}</div> */}
        <button onClick={myfunction}>click me</button>
        <br/>
        {/* <button onClick={()=>printname(props.obj.Username)}>print my name</button> */}
        <br/>
        <button onClick={printname(props.obj.Username)}>print my name1</button>
        </> 
        
    )
}


export default Wrapper

//<button onClick={myfunction}>click me</button> never pass parenthesis becausse we pass it 
//function get automatically call 
//<button onClick={printname(props.obj.Username)}>print my name1</button> it get call atomticly

