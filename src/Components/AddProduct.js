import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";


const AddProduct = () => {
    const [PostForm, setPostForm] = useState({
        productName: '',
        productDescription: '',
        productPrice: '',
        productImageLink: '',
        subCategoryId: ''
    })
    let history = useHistory();

    const postOnSubmit = (e) => {
        e.preventDefault()
        axios.post('https://localhost:44320/api/Products',{
            productName: PostForm.productName,
            productDescription: PostForm.productDescription,
            productPrice: parseInt(PostForm.productPrice),
            productImageLink: PostForm.productImageLink,
            subCategoryId: parseInt(PostForm.subCategoryId) 
        })
        .then(res => {
            console.log(res.data)
            history.push('/Products')
        })
        
    }



    const handleChange = (e) => {
        console.log(e)
        setPostForm({
            
            ...PostForm,
            [e.target.name]: e.target.value
        })
    }
  
    return (
        <div className="container">
            <div className="d-flex justify-content-center mt-5">
                <h1 className="Nav-font">Add a new product!</h1>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <form onSubmit={postOnSubmit}>
                    <input value={PostForm.productName} onChange={handleChange} type="productName" name="productName" placeholder="Product name" className="Nav-font width rounded-corners p-2 form-control"/>
                    <textarea value={PostForm.productDescription} onChange={handleChange} type="productDescription" name="productDescription" placeholder="Product description" className="mt-3 Nav-font width rounded-corners p-2 form-control"/>
                    <input value={PostForm.productImageLink} onChange={handleChange} type="productImageLink" name="productImageLink" placeholder="image URL" className="mt-3 Nav-font width rounded-corners p-2 form-control"/>
                    <div className="d-flex justify-content-between">
                    <input value={PostForm.productPrice} onChange={handleChange} type="productPrice" name="productPrice" placeholder="price SEK" className="mt-3 half-width Nav-font width rounded-corners p-2 form-control"/>
                    <input value={PostForm.subCategoryId} onChange={handleChange} type="subCategoryId" name="subCategoryId" placeholder="Subcategory ID" className="mt-3 half-width Nav-font width rounded-corners p-2 form-control"/>
                    
                    </div>
                    <button type="submit" className="background-image b-none balck mt-3 Nav-font rounded-corners width btn btn-primary">Add product!</button>
                </form>
                </div>
           
        </div>
    )
}

export default AddProduct
