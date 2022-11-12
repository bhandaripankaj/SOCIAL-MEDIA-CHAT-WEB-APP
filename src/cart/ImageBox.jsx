import React, { useState,useEffect } from "react";
import { Box, Typography, Button, TextField } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles'
import {sliderData} from '../helpers/index'
const useStyles = makeStyles({
    hover: {
        backgroundColor: "#fff",
        "&:hover": {
            boxShadow: '10px 10px 30px #ccc'
        },
    },
});

const ImageBox = () => {
    const history = useNavigate();
    const classes = useStyles();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideImage2 , setImages] = useState(sliderData)

    useEffect(() => {
    setInterval(()=>{
      
      setCurrentSlide(currentSlide=> currentSlide < sliderData.length -1  ? currentSlide + 1:0)
    },5000)
    }, []);
    

    return <Box 
    width={400} 
    height={400}
    display="flex"
    justifyContent="center"
    alignItems="center"
    margin={'auto'}
    position={"absolute"}
    // marginTop={20}    
    marginLeft={"180px"}
    padding={3}
        borderTopLeftRadius= {20}
        borderBottomLeftRadius={20}
        sx={{borderTopLeftRadius:20,borderBottomLeftRadius:20}}

    color='#009688'
    backgroundColor= "#009688"
    style={{clipPath:"polygon(0 0, 100% 0, 59% 100%, 0% 100%)"}}
    />
}

export default ImageBox