import { ADD_TO_CART } from "./Constant"
import { REMOVE_FROM_CART } from "./Constant"
export const addToCart=(data)=>{
    console.warn(" addtocart action called",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const removeToCart=(data)=>{
   
 console.log(" remove from cart Action called",data)
return{
    type:REMOVE_FROM_CART,
    data:data
}
}