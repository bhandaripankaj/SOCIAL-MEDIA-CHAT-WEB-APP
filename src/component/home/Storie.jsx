import { Avatar, Button, Card, Fab, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import {Stories} from '../../helpers/index'
import { Add } from "@mui/icons-material";
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import styled from "@emotion/styled";

const ArrorButton = styled(Tooltip)({
    position:"absolute",
    color:"#ffff",
    margin:"25px 0px 0px 640px",
    backgroundColor:"#4db6ac",
    borderRadius:"25px",
    cursor:"pointer"
    // height:10,
    // width:30
    // startsWith:"end"
})
const ColoredLine = ({ color }) => (
    <view
        style={{
            color: color,
            backgroundColor: "#eae2e2",
            height: 80,
            width:2,
            border:1.5,
            position:"absolute",
            marginLeft:-3,
            // marginTop:-18
        }}
    />
);
const Story = ()=>{
const ref = useRef(null);
const scroll = (scrollOffset) => {
    console.log(scrollOffset)
    ref.current.scrollLeft += scrollOffset;
  };
console.log("open",ref)

    return (
        <Box sx={{display:{xs:"none",sm:"block"}}}>
       <Card  sx={{margin:"0px 24px 24px 24px" , borderRadius:5,overflow:"auto", bgcolor:"#ffff",height:120, display:"flex",alignItems:"center"}} ref={ref}>
             <Stack direction="row" spacing={2}>
             <Box display={"flex"} overflowX={"scroll"}  gap={"20px"}>
             <Box position={"relative"}>
                <Fab sx={{width:70,height:70, border:"thick solid",boxShadow:0, overflow:"hidden",borderWidth:2,borderColor:"#009688",color:"#ffff",bgcolor:"#4db6ac",marginLeft:3,marginRight:5}} aria-label="add">
             <Add/>
              </Fab>
             <ColoredLine color="gray"/>
             
             {/* <Tooltip title="Delete" sx={{display:"flex"}}>
                         <Fab>   */}
                            {/* <ArrowForward /> */}
                        {/* </Fab>
                         </Tooltip>  */}
                </Box>
                
             {Stories.map((el,index) => {
                    return (
                        <>
                        <Stack direction={"column"} sx={{textAlign:"center",fontSize:10,cursor:"pointer"}} spacing={0.4} >
                        <Avatar sx={{width:65,height:65,border:"thick solid",overflow:"hidden",borderWidth:2,borderColor:"#009688"}} alt={(1 + index).toString()} src={el.image} />
                        <Typography variant="6"  >UK {index>8?"":0}{index+1}</Typography>
                        </Stack>
                        </>
                    );
       })}
            <ArrorButton onClick={() => scroll(100)}>
                <ArrowForwardIosTwoToneIcon/>
             </ArrorButton>
             </Box>
           
             </Stack>
         </Card>
        </Box>
       
    )
}


export default Story