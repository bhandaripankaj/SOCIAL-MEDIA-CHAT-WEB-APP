import { Box } from "@mui/system";
import React from "react";
import Posts from "./Post";
import Story from "./Storie";
const Feed=()=>{
    return(
        <Box
        // bgcolor={"pink"} 
        flex={4} 
        p={2}
        >
            <Story/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>

        </Box>
    )
}
export default Feed