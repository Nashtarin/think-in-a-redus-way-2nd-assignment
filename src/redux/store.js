import { createStore } from "redux";
import cartItemsReducer from "./cartItems/cartItemsReducer";

const store=createStore(cartItemsReducer)
console.log(store)
export default store;