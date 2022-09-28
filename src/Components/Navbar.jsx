import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`
let activeStyle = {
  textDecoration: "underline",
  color:"blue",
};
const Navbar = () => {
  const { state } = useContext(AuthContext)
  return <div style={
    {
      position: "fixed",
      width: "97%",
      right: "20px",
      zIndex: "10"

    }
  }>
    <Flex fontSize="20px" bg="gray.100" py="5px" justifyContent="space-between">
      <Box>
        <Text color="blue"><span style={{ color: "black" }}>Token:</span>{state.isToken}</Text>
      </Box>
      <Flex gap="20px">
        <NavLink style={({ isActive }) =>
          isActive ? activeStyle : undefined
        } to="/">Home</NavLink>
        <NavLink style={({ isActive }) =>
          isActive ? activeStyle : undefined
        } to="/cart">Cart</NavLink>
        <NavLink style={({ isActive }) =>
          isActive ? activeStyle : undefined
        } to="/Login">Login</NavLink>
      </Flex>
    </Flex>
  </div>;
};

export default Navbar;
