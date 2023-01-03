import React from "react";
import { Avatar, AvatarGroup, Badge, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material'
import {onlineFriend} from '../../helpers/index'
import { Stack } from "@mui/system";
import CakeTwoToneIcon from '@mui/icons-material/CakeTwoTone';
import styled from "@emotion/styled";
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: "#eae2e2",
            height: 1,
            border:1.5,
            marginRight:20,
            marginLeft:-22,
            marginTop:40,
            marginBottom:20
        }}
    />
);
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
const Rightbar=()=>{
    return(
        <Box 
        // bgcolor={"#ffff"}
        flex={2} 
        p={2}
        sx={{display:{xs:"none",sm:"block"},marginTop:"100px"}}
        >
            <Box position={"fixed"} padding={3} maxHeight={"83%"} sx={{overflowY:"scroll"}} bgcolor={"#ffff"}>
              <Stack direction="row" spacing={1}>
              <Typography variant="h6" fontWeight={100} >Online Friends</Typography>
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                variant="dot"
              >
              </StyledBadge>
              </Stack>
          
            <AvatarGroup sx={{gap:0.4,marginLeft:6,marginTop:1,cursor:"pointer"}} max={6}>
                  {onlineFriend.map((el) => (
                    <Avatar alt="Remy Sharp" src={el.image} />
                ))}
            </AvatarGroup>  
            <ColoredLine color="gray" />
            <Typography variant="h6" fontWeight={100} >Events</Typography>
 
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    <ColoredLine color="gray" />
          <Stack direction={"row"} spacing={2} justifyContent={"space-between"} >
          <Typography variant="h6" fontWeight={100} >Friend Requests</Typography>
          <Button sx={{width:100,height:30}}href="#">See all</Button>
          </Stack>
            <Stack direction={"row"} sx={{padding:2}} spacing={1} >
            <Avatar sx={{width:50,height:50}} alt="Remy Sharp" src={onlineFriend[0].image} />
            <Typography variant="6"position={"relative"} fontSize={14} >Bhandari uk01</Typography>
            </Stack>
            <Stack direction={"row"} sx={{padding:2,position:"absolute",marginLeft:"50px",marginTop:"-41px"}} spacing={1} >
              <Stack direction={"row"} sx={{padding:2,position:"absolute",marginLeft:"-6px",marginTop:"-38px"}}spacing={0.3}>
              <Avatar sx={{width:15,height:15}} alt="Remy Sharp" src={onlineFriend[1].image} />
              <Typography variant="6" fontSize={10} >10 mutual friends</Typography>
              </Stack>
            <Button sx={{width:100,height:30,bgcolor:"#009688","&:hover": {bgcolor:"#009688"},}}  variant="contained">Confirm</Button>
            <Button sx={{width:100,height:30,bgcolor:"#90a4ae"}} variant="contained">Remove</Button>
            </Stack>
            
            <ColoredLine color="gray" />
            <Typography variant="h6" fontWeight={100} >Birthdays</Typography>
              <Stack direction={"row"} sx={{padding:2,cursor:"pointer"}} spacing={1} >
              <CakeTwoToneIcon sx={{width:40,height:40,position:"relative", color:"#26a69a",}}/> 
            <Typography variant="6"position={"relative"} fontSize={14}>Bhandari uk01 and 20 others have birthday today.</Typography>
            </Stack>
            </Box>
        </Box>
    )
}
export default Rightbar