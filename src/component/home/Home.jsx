import React, { useState,useEffect } from "react";
import { Box, Typography, Button, TextField ,Stack,Divider,Grid} from '@mui/material'
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles({  
    hover: {
        backgroundColor: "#fff",
        "&:hover": {
            boxShadow: '10px 10px 30px #ccc'
        },
    },
});
const Home = () => {    
    return (
        <>
          <Box sx={{ flexGrow: 1 }}>
        <Box display='flex' 
    justifyContent={'center'}
    marginRight={-1}
    marginLeft={-1}
    marginTop={-1}
    borderBottom={1}
    borderColor={"#e0e0e0"}
    backgroundColor={"#ffff"}
    padding={3}
    >
        fdfdfg
        </Box>

         <Box 
            display='flex' 
                width={200}
                height={535}
                justifyContent={'center'}
                overflow={"hidden"}
                
                sx={{float:"right", borderTopRightRadius:10, ":hover":{overflowY:"auto"}}}
                marginLeft={-1}
                marginTop={1}
                position={"relative"}
                backgroundColor={"#ffff"}
                padding={3}
                >
                    <ui>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>

                    </ui>
                    </Box>
       <Box 
       display='flex' 
       justifyContent={'center'}
       width={300}
       backgroundColor={"#ffff"}
       padding={3}
       marginLeft={50}
       position ={"absolute"} 
       >

       </Box>
        <Box 
            display='flex' 
                width={200}
                height={535}
                justifyContent={'center'}
                overflow={"hidden"}
                sx={{ ":hover":{overflowY:"auto"}}}
                // marginLeft={-1}
                marginTop={1}
                position={"relative"}
                backgroundColor={"#ffff"}
                padding={3}
                >
                    <ui>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                        <li>hh</li>
                    </ui>
                    </Box> 
    </Box>
    </>
        
    )
        
}

export default Home