import React, { useState,useEffect } from "react";
import { Box} from '@mui/material'
import { makeStyles } from '@mui/styles'
import {sliderData} from '../helpers/index'

const useStyles = makeStyles({
    image1: {
      backgroundImage:`url("assets/phone123.png")`,
      height:369,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', 
        width: 329,
        transform: "rotate(35deg)",
        marginLeft:-80,
        marginTop:125,
        position:"relative",  
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:"row"
    },
    image2: {
        backgroundImage:`url("assets/image-phone2.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        width: 380,
        height:465,
        transform: "rotate(-1deg)",
        marginLeft:155,
        marginTop:70,
        padding:3,
        position: "absolute",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:"row"
    },
    slideImage2: {
        transform: "rotate(0deg)",
        width: 194,
        height:414,
        marginTop:-1,
        marginLeft:132,
        borderRadius:30,
        position: "absolute", 
    },
    slideImage1: {
        transform: "rotate(0deg)",
        width: 133,
        height:295,
        marginTop:58,
        marginLeft:-11,
        position: "absolute",
        
    },
});

const ImageCart = () => {
    const classes = useStyles();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideImage2 , ] = useState(sliderData)

    const [lastSlide, setLastSlide] = useState(sliderData.length);
    const [slideImage , ] = useState(sliderData)

    useEffect(() => {
    setInterval(()=>{
      setCurrentSlide(currentSlide=> currentSlide < sliderData.length -1  ? currentSlide + 1:0)
      setLastSlide(lastSlide=>lastSlide > 0 ? lastSlide - 1 : sliderData.length -1 )
    },5000)
    }, []);
 
    return (
      <>
      <Box position={"relative"}>
        <Box
    width={400} 
    height={450}
    display="flex"
    justifyContent="center"
    alignItems="center"
    margin={'auto'}
    position={"absolute"}
    // marginTop={20}    
    marginLeft={"250px"}
    padding={3}
        borderTopLeftRadius= {20}
        borderBottomLeftRadius={20}
        sx={{borderTopLeftRadius:20,borderBottomLeftRadius:20}}

    color='#009688'
    backgroundColor= "#009688"
    style={{clipPath:"polygon(0 0, 100% 0, 59% 100%, 0% 100%)"}}
    />

     <Box 
     width={400} 
     height={503}
     display="flex"
     justifyContent="center"
     alignItems="center"
     position={"absolute"}
     // marginTop={20}
     marginLeft={"250px"}
     >
       <div className={classes.image1}>
       <img src={slideImage[lastSlide]?.image}  alt="im2" className={classes.slideImage1}></img>
       </div>
       <div className={classes.image2}>
       <img src={slideImage2[currentSlide]?.image} alt="im2" className={classes.slideImage2}></img>
       </div>
     </Box> 
     </Box>
      </>
    
    )
   
}

export default ImageCart