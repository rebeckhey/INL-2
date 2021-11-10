import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';




const Details = ({match}) => { //match hämtas som en props från react-router-dom
    const [detailPage, setDetailPage] = useState([]); //state för datan vi hämtar och sätts till en tom array
    
    
    const fetchOneProduct = () => {
        axios
        .get(`https://localhost:44320/api/Products/${match.params.id}`)
        .then((response) => {
            setDetailPage(response.data)
            // console.log(response.data)
        })
        .catch((err) => console.log(err));
    }
    useEffect(() =>{
        fetchOneProduct()
    },[])

   
    return (
       
        <div className="container m-5">
           <div className="d-flex justify-content-center">
               <h1 className="Nav-font">{detailPage.productName}</h1></div>
           <div className="d-flex justify-content-evenly mt-5 ">
               <img className="img detailsimg p-3 rounded" src={detailPage.productImageLink} alt="christmas wreath"/>
              <div className="">
                 <div className="mt-5">
                     <div className="d-flex justify-content-center">
               <p className="Nav-font">{detailPage.productDescription}</p>
               </div>
               <div className="d-flex justify-content-center">
               <p className="Nav-font">{detailPage.productPrice}:-</p>
               </div>
               <div  className="d-flex justify-content-center">
               <button className="mt-5 btn btn-info Nav-font size">Add to Cart</button>
               </div > 
              </div>
           
               </div>
            </div> 
            
        </div>
           
    )
}

export default Details
