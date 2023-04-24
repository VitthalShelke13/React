import React from "react";
import { useState } from "react";
import Product from "./Product";
export const ProductList=()=>{
    let productlist = [{
        id:"1",
        name:'Queen Panel Bed',
        prize:'2000',
        quantity:'10',
        InStock:true
    },

    { 
        id:'2',
        name:'King Panel Bed',
    prize:'2500',
    quantity:'14',
    InStock:false
},

    {
        id:'3',  
        name:'Single bed',
    prize:'200',
    quantity:'7',
    InStock:true
},

    { 
        id:'4',
        name:'Dresser',
    prize:'2000',
    quantity:'10',
    InStock:false
}

]

const[product,setProduct]=useState(productlist)
function deleted(e){
    console.log(e.target.id)
    let upDetedList =product.filter((el)=>e.target.id!==el.id)
    // it is use to what we delet filter use to delete list it can return new array 
    // but problem isthat  not rendering for that we use useState
    console.log(upDetedList)
    //updateing the same array and passing to the useState wont work [reffernce type note]
    console.log('deleted')
   setProduct(upDetedList)
}
//add item to list

function AddItems(){
  product.push({ 
        id: product[product.length-1].id+1+``,
        name:'King Panel Bed',
    prize:'2500',
    quantity:'14'})
    console.log(product)
  setProduct([...product])
}

// function rendering(){
//     let arr =[]
// productlist.forEach(el=>{
//     arr.push(<Product name={el.name} prize={el.prize} quantity={el.quantity}/>)


// })
// return arr
// }

    return(
        <>
        <h3>ProductList</h3>
        {/* <div>ProductList</div>
        <Product name={productlist[0].name}
        prize={productlist[0].prize}
        quantity={productlist[0].quantity} /> */}
        <section>
         {product.map((el)=>
         {
            return(    
                <div key={el.id}>
                <Product name={el.name} prize={el.prize} quantity={el.quantity} Avilable={el.InStock}/>
                <button onClick={(e)=>deleted(e)} id={el.id}>Delete</button><br/>
                
                </div>
                )
            })}   
            <button onClick={AddItems}>AddItems</button>
        </section>
        {/* {rendering()} */}
        </>
    )
}
export default ProductList
//rendering of the list of produvct we use map becaue map createnew array always
// key index is unic which is use and needed when list of item needed
//if we dont it , it give error in console
// without map we can also use for each and for loop for list acces but it has long way 
// create empty arr
// also one way "IF E" in this way we can wrappp in bracket whole function which is return in react
// insted of return statement we can use curly bracess it also work
// {/* <section>
// {productlist.map((el,index)=>
//     (    <>
//         <div key={index}>
//         <Product name={el.name} prize={el.prize} quantity={el.quantity}/><br/>
//         </div>
//         </>)
//  )}   
// </section> */}
// we change productlist to==>>prodcut updated value