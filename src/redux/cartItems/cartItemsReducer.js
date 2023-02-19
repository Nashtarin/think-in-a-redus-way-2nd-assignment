
import { DECREMENT, INCREMENT } from "./actionTypes"
const initialState=[{
id:1,
count:0,
price:35500
},
{id:2,
    count:0,
    price:9300

},
{id:3,
    count:0,
    price:36500

}]
const cartItemsReducer=(state=initialState,action)=>{
    switch (action.type) {
        
        case INCREMENT:
            const items=state.map(item=>item.value+1)
         return{
            ...state,
            items
            
         }
        case DECREMENT:
            const products=state.map(item=>item.value-1)
            
         return{
            ...state,
         products
         }
    
        default:
            return state;
    }

}
export default cartItemsReducer;