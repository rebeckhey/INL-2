import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";



const ProductCard = ({product}) => {
   

    return (
      
        <div className="d-flex justify-content-start col" >
           
            <div className="card  bord mt-5">
    <img className="p-3 img-size" src={product.productImageLink} alt="christmas wreath"/>
    <h1 className="Nav-font smaller d-flex justify-content-center">{product.productName}</h1>
    <div className=" ">
        <div className="d-flex justify-content-center">
        <p className="Nav-font">{product.productPrice}:-</p>
        </div>
        <div className="d-flex justify-content-center">
    
    <Link to={`products/${product.id}`}>
    <button className="btn btn-info Nav-font size mb-5">View product</button>

        </Link>



        
     
    </div>
     </div>
    
    </div>
        </div>
    )
}

export default ProductCard
