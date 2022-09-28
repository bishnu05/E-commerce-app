import React, { createContext, useReducer } from "react";

import { cartReducer } from "./reducer";
export const CartContext=createContext();

// 1. create cart context and cart context provider for the entire application to have cart related data;

// 2. maintain cart data in the state; it goes without saying; you are expected to use useReducer as state management tool; ( Hint : different actions you are expected to have are adding item to cart, removing item from cart, and checkout ..)

// 3. send both state and dispatch values so that entire application has access to the state and dispatch function;
const initState={
  isLoading:false,
  data:[],
  isError:false
}

const CartContextProvider = ({children}) => {
const [cartState,cartDispatch]=useReducer(cartReducer,initState)
  return <>
    <CartContext.Provider value={{cartState,cartDispatch}}>
      {
        children
      }
    </CartContext.Provider>
  </>;
};

export default CartContextProvider;
