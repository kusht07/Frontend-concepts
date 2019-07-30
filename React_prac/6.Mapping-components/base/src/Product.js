import React from "react"

function Product (props){
    return (
        <div>
            {/* <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <h3>{props.desc}</h3> */}
             <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
        </div>
    )   
}

export default Product