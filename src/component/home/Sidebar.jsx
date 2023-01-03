import React from "react";
import { Avatar, Box, Button, Collapse, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Switch, TextField, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import {onlineFriend} from '../../helpers/index'

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
const Sidebar=({mode,setMode})=>{
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
      setOpen(!open);
    };
    return(
        <Box 
        // bgcolor={"#ffff"} 
        flex={1} 
        p={2}
        sx={{display:{xs:"none",sm:"block"}}}
        >
     <Box  position={"fixed"} maxHeight={"83%"} sx={{overflowY:"scroll"}} padding={3}  bgcolor={"#ffff"}>
            <List>
        <ListItem disablePadding>
            <ListItemButton component="a" href="/home">
                <ListItemIcon>
                    <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Home"/>
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#Posts">
                <ListItemIcon>
                    <SendToMobileIcon/>
                </ListItemIcon>
                <ListItemText primary="Posts"/>
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#Friend">
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="Friend"/>
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#Event">
                <ListItemIcon>
                    <EventIcon/>
                </ListItemIcon>
                <ListItemText primary="Event"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Game">
                <ListItemIcon>
                    <SportsEsportsIcon/>
                </ListItemIcon>
                <ListItemText primary="Game"/>
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#place">
                <ListItemIcon>
                    <ModeOfTravelIcon/>
                </ListItemIcon>
                <ListItemText primary="Favourite"/>
            </ListItemButton>
        </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#mood">
                <ListItemIcon>
                    <ModeNightIcon/>
                </ListItemIcon>
                <Switch onChange={e=>setMode(mode==="light"?"dark":"light")}/>
            </ListItemButton>
        </ListItem>
         
       </List>
       <ColoredLine color="gray" />
       <Typography variant="h5" fontWeight={400} color={"gray"} >Your Favourite</Typography>
       <Typography variant="h5" fontWeight={400} color={"gray"} >Groups</Typography>
       <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
       {onlineFriend.map((value) => {
                    return (
                      <ListItem
                        disablePadding
                      >
                        <ListItemButton>
                          <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src={value.image} />
                          </ListItemAvatar>
                          <ListItemText  primary={`Line item`} />
                        </ListItemButton>
                      </ListItem>
                    );
       })}
    </List>
            </Box>
      

        </Box >
    )
}
export default Sidebar