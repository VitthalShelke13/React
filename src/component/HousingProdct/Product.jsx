const Product=(props)=>{
    console.log(props)
    return(
       <section>
        <img src={props.image} alt=""></img>
        <p>{props.name}</p>
        <p>{props.type}</p>
        <p>Rating:{props.rating}</p>
        <p>Price:{props.price}</p>
        <p>{props.available ? 'In Stock':'Out Of Stock'}</p>
        <p>Username:{props.Username}</p>
       </section>   
    )
}

export default Product
//props mean properties
//if we treat component as a function then propsis a parameter of hte funtion
// for object i.e reffrence type use distruct way  