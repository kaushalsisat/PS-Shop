import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../store/StoreContext';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
    console.log("productcard:",product)
    const{id,image,title,price,description,rating:{rate,count}}=product;

let cardtitle= title.length<51?title:title.slice(0,50)

let{dispatch}=useCart()
 
//handling the AddTocart Functionality
function handleAddtocart(product){
    dispatch({type:"ADD_TO_CART",payload:product})
    toast.success("added item to cart")
}

return (
<div className='col-12 col-sm-12 col-md-3 col-lg-3 mt-4 mb-4'>
     <div className="card shadow p-3 h-100 w-auto" style={{ backgroundColor: 'rgb(214, 214, 214)' }}>
     <Link to={`/shop/:${id}`} className="nav-link">
     <img src={image} className="card-img-top product-img p-1 bg-secondary" alt="..."/>
       <div className="card-body">
        <h5 className="card-title">{cardtitle}</h5>
         <p className="card-text">${price}</p>
       </div>
       </Link>
       <button className='btn btn-success' onClick={()=>handleAddtocart(product)}>AddtoCart</button>
      </div>

    </div>
  )
}

export default ProductCard