import { useNavigate } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import { Button, Input, Box, Flex, Stack, FormLabel } from "@chakra-ui/react";

import axios from "axios";
import { useContext, useState } from "react";

import { getLoginFailure, getLoginRequest, getLoginSuccess } from "../Context/AuthContext/action";
import Sekleton from "./Sekleton";
// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`




const getAuth = (email, password) => {

  return axios.post(`https://reqres.in/api/login`, {
    email,
    password,
  });
};
const initialValue = {
  email: "",
  password: "",
};
const Login = () => {


  const navigate = useNavigate();

  const [formState, setFormState] = useState(initialValue);
  const { state, dispatch } = useContext(AuthContext);
  console.log(state)
  const [loading, setLoading] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  const { email, password } = formState;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getLoginRequest)
    setLoading(true)

    getAuth(email, password).then((res) => {

      if (res.data.token) {
        dispatch({ ...getLoginSuccess, payload: res.data.token })
        navigate("/")
        setLoading(false)


      }
    }).catch((err) => {
      dispatch(getLoginFailure)
    })
  };
  ;

  return (
    <Box>
      {
        loading ?
          <Sekleton />
        : <Flex justifyContent="center" >
          <Flex
            mt="120px"

            boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 50px;"
            border="1px solid gray"
            py="60px" px="30px" direction="column">
            <FormLabel>Email</FormLabel>
            <Input
              w="500px"
              placeholder="email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <FormLabel mt="10px">password</FormLabel>
            <Input w="500px" placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange} />
            <Flex justifyContent="center">
              <Button mt="10px" bg="teal" onClick={handleSubmit}>

                submit
              </Button>
            </Flex>
          </Flex>
        </Flex>
      }

    </Box>
  );
};

export default Login;