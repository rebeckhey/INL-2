import React from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';


export default class ProductList extends React.Component {
 state = {
  products: []
 }

 componentDidMount() {
  axios.get(`https://localhost:44320/api/Products`)
 .then(res => {
    const products = res.data;
    this.setState({ products });
   })
 }

 render() {
  return (
    <div className="container ">
   <div className="row d-flex justify-content-center m-5 ">
   
    {this.state.products.map(product => 
    {
      
      return (
        
        <ProductCard  product={product} key={product.id}/>
       
      );
     
    }
    )}
   
   </div>
   </div>
  )
 }
}



