import React,{useEffect, useRef, useState} from "react";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Modal, TextField, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import { makeStyles } from '@mui/styles'

import { Favorite, FavoriteBorder } from "@mui/icons-material";
import TurnedInNotTwoToneIcon from '@mui/icons-material/TurnedInNotTwoTone';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import OpenInNewOffOutlinedIcon from '@mui/icons-material/OpenInNewOffOutlined';
import HideSourceOutlinedIcon from '@mui/icons-material/HideSourceOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CommentBankOutlinedIcon from '@mui/icons-material/CommentBankOutlined';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const useStyles = makeStyles({
   Icon:{
    color:"#ffff"
   }
})
const Posts=()=>{
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open)
}
const classes = useStyles();

    return(
      <>
        <Card sx={{margin:3,position:"relative"}}>

           {open&&(
        <Box 
        sx={{
          position:"absolute",
          bgcolor:"#0097a7",
          margin:"40px 0px 0px 385px",
          height:400,
          width:250,
          clipPath: "polygon(89% 3%, 100% 0, 100% 8%, 100% 100%, 0 100%, 0 3%)",
          borderRadius:"0px 0px 10px 10px"
        }}
       
        >
            <List sx={{color:"#fff",marginTop:1}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TurnedInNotTwoToneIcon   className={classes.Icon}/>
              </ListItemIcon>
              <ListItemText primary="Save post" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <PersonAddAltOutlinedIcon className={classes.Icon}/>
              </ListItemIcon>
              <ListItemText primary="Follow" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <FavoriteBorderTwoToneIcon className={classes.Icon}/>
              </ListItemIcon>
              <ListItemText primary="Add to favourites" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <OpenInNewOffOutlinedIcon className={classes.Icon}/>
              </ListItemIcon>
              <ListItemText primary="Embed" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <HideSourceOutlinedIcon className={classes.Icon}/>
              </ListItemIcon>
              <ListItemText primary="Hide Post" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <ContentCopyOutlinedIcon className={classes.Icon}/>
              </ListItemIcon>
              <ListItemText primary="Copy link" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <ReportProblemOutlinedIcon className={classes.Icon}/>
              </ListItemIcon>
              <ListItemText primary="Report Post" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <Button sx={{color:"#ffff",marginLeft:"80px"}} onClick={handleOpen}>Cancel</Button>
        </List>
       </Box>
      )}

        <CardHeader
          avatar={
            <Avatar sx={{width:40,height:40}} src="assets/my-photo.jpg"  aria-label="recipe"/>
          }
          action={
            <IconButton  aria-label="settings">
              <MoreVertIcon   onClick={handleOpen} />
            </IconButton>
          }
          title="Pankaj Bhandari"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="1%"
          image="assets/my-photo.jpg"
          alt="Paella dish"
        />
         <CardActions disableSpacing sx={{marginTop:-2,marginLeft:-2}}>
          <IconButton aria-label="add to favorites">
            <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
          </IconButton>
          <IconButton aria-label="comments">
            <CommentBankOutlinedIcon/>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
       
      

      {/* ---- */}
      
      </Card>
      </>
    )
}

export default Posts