import{useState,useEffect} from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import ProductCard from "../components/Product";

const Shop = () => {
//useState for displaying the product fetched
let [products,setProducts]=useState([])
console.log(products);

// useEffect for fetching the data from an api
useEffect(()=>{
   const fetchproducts = async()=>{
       const response = await axios.get("https://fakestoreapi.com/products");
       setProducts(response.data);

   }

   //calling the function to retch the products
     fetchproducts();

    return () => {};

},[]); //fetch only once the data at initial load

if(products.length===0)return <div className="container-s">
<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
  return (
    <>
      <div className="row">
       {
        products.map((product)=><ProductCard key={product.id}  product={product}/>)
       }

      </div>
      
    </>
  )
}

export default Shop;
