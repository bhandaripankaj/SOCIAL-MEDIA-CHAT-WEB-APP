import React, { useState,useEffect } from "react";
import { Box, Stack, Button, TextField, createTheme, ThemeProvider } from '@mui/material'

import Feed from "./Feed";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Home = () => {   
   const [mode,setMode] = useState("light")
   const darkTheme = createTheme({
      palette:{
         mode:mode
      }
   }) 
   return (
      <ThemeProvider theme={darkTheme}>
       <Box 
      // bgcolor={"background.default"} 
      // color={"text.primary"}
      >
        <Navbar/>
         <Stack direction={"row"}  spacing={2} justifyContent={"space-between"}>
             <Sidebar setMode={setMode} mode={mode}/>
             <Box width={"750px"}>
             <Feed/>
             </Box>
              <Rightbar/> 
          </Stack>

         </Box>
      </ThemeProvider>
   
   )
        
}

export default Home