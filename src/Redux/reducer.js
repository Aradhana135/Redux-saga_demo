 import { ADD_TO_CART, REMOVE_FROM_CART } from "./Constant"
 export const cartData=(data=[],action)=>{
    switch(action.type){
        case ADD_TO_CART:
            console.log(" addtocart reducer called",action)
            return [action.data,...data]
        
        case REMOVE_FROM_CART:
console.log("Remove fromcart reducer called",action)
return data
        
        default:
            return data  
    }
    // if(action.type===ADD_TO_CART){
    // console.log("reducer called",action)
    // return action.data
    // }
    // else
    // return 'no action matched'
 }