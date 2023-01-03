import { AppBar, styled, Toolbar, Typography ,Box,InputBase, Badge, Avatar, Menu, MenuItem} from "@mui/material";
import React,{useState} from "react";
import  Diversity2Icon  from '@mui/icons-material/Diversity2';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"#009688"
})
const Search = styled("div")(({theme})=>({
backgroundColor:"white",
padding:"0 10px",
borderRadius:theme.shape.borderRadius,
width:"40%"
}))
const Icons = styled(Box)(({theme})=>({
display:"flex",
gap:"10px",
alignItems:"center",
[theme.breakpoints.up("sm")]:{
    gap:"20px"
}
}))
const Navbar=()=>{
    const [open,setOpen] = useState(false)
    return(
        <AppBar
        position="sticky"
        >
           <StyledToolbar>
           <Typography variant="h6"  sx={{display:{xs:"none",sm:"block"}}}>Two~Way</Typography>
           <Diversity2Icon sx={{display:{xs:"block",sm:"none"}}} />
             <Search><InputBase placeholder="search..."/> </Search>
             <Icons>
                <Badge badgeContent={5} color="error">
                <ChatIcon/>
                </Badge>
                <Badge badgeContent={2} color="error">
                <NotificationsIcon/>
                </Badge>    
                <Avatar  sx={{width:30,height:30}} src="assets/my-photo.jpg" onClick={e=>setOpen(true)} />
             </Icons>
            </StyledToolbar> 
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
         </Menu>
            </AppBar>
    )
}

export default Navbar