import { Td, Tr,Button } from '@chakra-ui/react'
import React from 'react'

function CartCard({item,deleteItem}) {
  return (

      <Tr>
        <Td>{item.title}</Td>
        <Td>{item.price}</Td>
        <Td><Button bg="red.100" onClick={()=>deleteItem(item.id)}>Remove</Button></Td>
      </Tr>
  
  )
}

export default CartCard
