import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
import { Flex,Button,Text, Heading, Table, Tr, Th, Tbody, Thead, Box } from "@chakra-ui/react"

import Dialouge from "./Dialouge"
import { CartContext } from "../Context/CartContext/CartContextProvider";
import { getAddRequest } from "../Context/CartContext/action";
import CartCard from "./CartCard";


// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.

const Cart = () => {

 const {cartState,cartDispatch}=useContext(CartContext)
 console.log(cartState)
 

 const [isLoading,setIsLoading]=useState(false);
 const getData=()=>{
  axios.get("https://yoox-4324.herokuapp.com/data")
  .then((res)=>{
    cartDispatch({...getAddRequest,payload:res.data})
  })
  
}
 useEffect(
  ()=>{
    getData()
  }
 ,[])
 let total=cartState.data.reduce((a,sum)=>a+sum.price,0);
 console.log(total)
function remove(id)
{

  fetch(`https://yoox-4324.herokuapp.com/data/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify()
  })
  .then(res=>res.json())
  .then(res=>{
    getData()
  })
}
function allRemove()
{
  setIsLoading(true)
  cartState.data.map((item)=>(
    fetch(`https://yoox-4324.herokuapp.com/data/${item.id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify()
    })
    .then(res=>res.json())
    .then(res=>{
      cartState.data.length--;
     if(cartState.data.length===0)
     {
      setIsLoading(false)
      getData()
  
     }
    })
  ))
}
  // const added=(e)=>{
  //   let data1=data.map(i=>i.id===e?{...i,status:false}:i)
  //   let data2=data1.find(i=>i.id===e)
  //   console.log(data2)
  //    setDAat({...dat,...data2})
  
  return <div>

    <Table m="auto">
    <Thead>
    <Tr>
        <Th fontSize="17px" color="red.400">product</Th>
        <Th fontSize="17px" color="red.400">Price(in INR)</Th>
        <Th fontSize="17px" color="red.400">Remove From Cart</Th>
      </Tr>
    </Thead>
    
    <Tbody>
      {
        cartState.data.map((item)=>(
          <CartCard item={item} deleteItem={remove}/>
        ))
      
        
      }
    </Tbody>
    </Table>
    <Flex justifyContent="space-around" mt="20px">
    <Box fontSize="29px" as="b">Total:{Math.floor(total)}</Box>
    <Dialouge  allRemove={allRemove}/>
    </Flex>
  </div>
};

export default Cart;

