import React, {  useEffect, useState } from "react";
import axios from "axios"
import { Box, SimpleGrid } from "@chakra-ui/react"
import HomeCard from "./HomeCard";


// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.
const getData=()=>{
  return axios.get("https://jabz-101-app.herokuapp.com/products");
}
const Home = () => {
 const [data,setData]=useState([]);




 useEffect(
  ()=>{
    getData()
    .then(res=>{
      setData(res.data)
    })
  }
 ,[])

  // const added=(e)=>{
  //   let data1=data.map(i=>i.id===e?{...i,status:false}:i)
  //   let data2=data1.find(i=>i.id===e)

  return <Box bg="red.500">

  <SimpleGrid columns={[1,2,3]} spacing={10}>
    {
      data.map((item)=>(
       <HomeCard item={item}/>
      ))
    }
    </SimpleGrid>
</Box>
};

export default Home;
