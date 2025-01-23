import React from 'react'
import { useCart } from '../store/StoreContext'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Cart = () => {
  const {state,dispatch}=useCart()
  const {cart}=state
  //function for Handling the Increment
 function handleIncrement(productId){
      dispatch({type:"INCREMENT",payload:{id:productId}})
      toast.success("Incremented item to cart")
 }
  //function for Handling the decrement
 function handleDecrement(productId){
  dispatch({type:"DECREMENT",payload:{id:productId}})
  toast.success("Decremented item to cart")
 }
  //function for Handling the Remove
  function handleRemove(productId){
    dispatch({type:"REMOVE_ITEM_IN_CART",payload:{id:productId}})
  toast.success("Removed item to cart")
  }


  return (
    <div className='container'>
       <div className='row'>
       {
  cart.length > 0 ? (
    cart.map((item) => (
      <div key={item.id} className='col-12 col-sm-12 col-md-3 col-lg-3'>
        <div className="card shadow p-3">
          <img src={item.image} className="card-img-top product-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.price * item.quantity}</p>
            <p className="card-text">{item.quantity}</p>
            <button className='btn btn-outline-success' onClick={() => handleIncrement(item.id)}>+</button>
            <button className='btn btn-outline-warning' onClick={() => handleDecrement(item.id)}>-</button>
            <button className='btn btn-outline-danger' onClick={() => handleRemove(item.id)}>🗑️</button>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className='cartPage d-flex justify-content-center'> 
    <h1 className='fw-bold m-1'><i class="bi bi-cart-x"></i></h1>
    <h1>Your cart is empty!!..</h1>
          <Link to='/shop' className="nav-link bg-primary w-25 ml-2 pt-2 pb-2 rounded-pill text-center">
            Shop Now
          </Link>
    </div>

    
  )
}

       </div>
    </div>
  )
}

export default Cart
