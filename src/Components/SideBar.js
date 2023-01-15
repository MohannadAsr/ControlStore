import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RoomIcon from '@mui/icons-material/Room';
import MailIcon from '@mui/icons-material/Mail';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/system'
import React from 'react'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SideBar() {

   

  return (
    
   
  <Box sx={{display:{xs:"none" , md:"block"} , height:"100%" , padding:2}} flex={1}  >
    <Typography variant='h5' sx={{ padding :1 , fontWeight: "bold"}}>
      Quick Navigation
    </Typography>
    <Divider />
  <List className='fw-bold'>
  <Link to={"/"}>
          <ListItem disablePadding >
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
              
                <ListItemText primary="Home"  />
      
              </ListItemButton>
            </ListItem>
</Link>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <AddShoppingCartIcon />
              </ListItemIcon>
              <ListItemText  primary="Start Shopping"   />
            
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RoomIcon />
              </ListItemIcon>
              <ListItemText primary="Our Branches" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact us" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ErrorOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Privacy and Terms"  />
            </ListItemButton>
          </ListItem>
          
        </List>
  </Box>
  

  )
}
