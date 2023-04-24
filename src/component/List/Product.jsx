import React from "react";
export const Product=(props)=>{

    return(
        <>
        
        <div>Name:{props.name}</div>
        <div>Prize:{props.prize}</div>
        <div>Quantity:{props.quantity}</div>
        <div>{props.Avilable ? 'InStocks':'Out of Stock'}</div>
        {/* {props.Avilable ?<button>Buy</button>:null} */}
        {/* short cercuit operator */}
        {props.Avilable && <button>Buy</button>}
        </>
    )
}
export default Product