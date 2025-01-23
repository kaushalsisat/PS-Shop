// step1: creating the initial State for Cart
 export let initialState={
     cart: JSON.parse(localStorage.getItem("cart"))||[]
 };

//step2: ceating the Reducers

const reducer=(state, action)=>{

  switch (action.type){
    case "ADD_TO_CART":
      // checking the Item alredy it exists in the card Or Not.
      let ExistingItem=state.cart.find((item)=>item.id === action.payload.id)
      console.log(ExistingItem)
      if(ExistingItem){
        return {...state,cart:state.cart.map((item)=>(item.id === action.payload.id?{...item,quantity:item.quantity+1}:item))}
      }else{
        return {...state,cart:[...state.cart,{...action.payload,quantity:1}]}
      }
 
    case "REMOVE_ITEM_IN_CART":
       return {...state,cart:state.cart.filter((item)=>item.id !== action.payload.id)}
    case "INCREMENT":
      return {...state,cart:state.cart.map((item)=>(item.id === action.payload.id?{...item,quantity:item.quantity+1}:item))}
    
    case "DECREMENT":
       return {...state,cart:state.cart.map((item)=>(item.id === action.payload.id && item.quantity > 1 ? {...item,quantity:item.quantity-1}:item))}
    
    default:
      break;
  }
};


export default reducer