import {useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useCart } from '../store/StoreContext';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  //getting the id from products
  const {id}=useParams()

//useState for displaying the product fetched
let [products,setProducts]=useState([])
console.log(products);

// useEffect for fetching the data from an api
useEffect(()=>{
   const fetchproducts = async()=>{
       const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
       setProducts(response.data);

   }

   //calling the function to retch the products
     fetchproducts();

    return () => {};

},[]); //fetch only once the data at initial load

const{image,title,price,description}=products;

if(products.length===0)return <div className="container-s">
<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div>
</div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>

let{dispatch}=useCart()

//handling the AddTocart Functionality
function handleAddtocart(product){
    dispatch({type:"ADD_TO_CART",payload:product})
    toast.success("added item to cart")
}


  return (

    
    <div className="card mb-3">
      <option value="all">All Categories</option>

    <div className="row g-0">
      <div className="col-md-4">
        <img src={image} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">${price}</p>
          <p className="card-text">{description}</p>
          <button className='btn btn-success' onClick={()=>handleAddtocart(products)}>AddtoCart</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductDetails
