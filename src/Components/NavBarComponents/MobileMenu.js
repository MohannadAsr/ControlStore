import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, SwipeableDrawer, Switch, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RoomIcon from '@mui/icons-material/Room';
import MailIcon from '@mui/icons-material/Mail';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


export default function MobileMenu({themeMode , setThemeMode}) {


    const [state, setState] = React.useState(false);


    const toggleDrawer = (anchor, open) => (event) => {
        setState(prev => !prev);
      };



  return (
    <Box sx={{display:{xs:"block" , md :"none"}}}>
      <IconButton color='inherit' size='large'  onClick={toggleDrawer()}>
              
                <MenuIcon sx={{color:"white"}} />
    </IconButton>

          <SwipeableDrawer
            anchor="right"
            open={state}
            onClose={toggleDrawer()}
            padding={1}
            PaperProps={{
                sx: { width: "auto" , maxWidth:"90%" , padding:1 },
              }}
           
          >
           <List className='fw-bold'>
            
           <Typography variant='h5' sx={{ padding :1 , fontWeight: "bold"}}>
      Quick Navigation
    </Typography>
    <Divider />
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
          <Typography variant='h5' sx={{ padding :1 , fontWeight: "bold"}}>
           Quick Settings
      </Typography>
      <Divider />
      <ListItem>
        <ListItemIcon>
       {themeMode ?  <DarkModeIcon /> : <LightModeIcon  />}
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary={themeMode  ? "Dark Mode":"Light Mode"} />
        <Switch color='primary' checked={themeMode ? true : false} onClick={()=>{setThemeMode(prev=>!prev)}} />
      </ListItem>
          
        </List>
          </SwipeableDrawer>

      </Box>
  )
}
