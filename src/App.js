
import { Box } from "@chakra-ui/react";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar"


function App() {

  return (
    <>
      <Box mx="20px">
      <Navbar/>
     <Box pt="40px">
     <AllRoutes />
     </Box>
      </Box>
      
      
    </>
  );
}

export default App;
