import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";



const ProductCard = ({product}) => {
   

    return (
      
        <div className="col" >
           
            <div className="card img-size bord mt-5">
    <img className="p-3" src={product.productImageLink} alt="christmas wreath"/>
    <h1 className="Nav-font smaller d-flex justify-content-center">{product.productName}</h1>
    <div className=" ">
        <div className="d-flex justify-content-center">
        <p className="Nav-font">{product.productPrice}:-</p>
        </div>
        <div className="d-flex justify-content-center">
    
    <Link to={`products/${product.id}`}>
    <button className="btn btn-info Nav-font size">View product</button>

        </Link>



        
     
    </div>
     </div>
    
    </div>
        </div>
    )
}

export default ProductCard
