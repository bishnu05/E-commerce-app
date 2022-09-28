import { Box, Img,Text,Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'


function HomeCard({item}) {
    const [status,setStatus]=useState(false);
   function post(item)
   {
    setStatus(true)
    fetch("https://yoox-4324.herokuapp.com/data",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(item)
    })

   }
  return (
  <Box>
    <Flex bgGradient="linear(blue,white)" p="10px" direction="column" alignItems="center" boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 50px;" key={item.id}>
      <Img src={item.image} w="200px" h="200px"  alt="img"/>
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
      <Button disabled={status} onClick={()=>post(item)}>Add To Cart</Button>
    </Flex>
    </Box>
  )
}

export default HomeCard
