import { Divider, List, ListItem, ListItemIcon, ListItemText, Switch, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Settings({themeMode , setThemeMode}) {
  return (
   <Box sx={{display:{xs:"none" , lg:"block"} , padding:2 }} flex={1}>
      <Typography variant='h5' sx={{ padding :1 , fontWeight: "bold"}}>
           Quick Settings
      </Typography>
      <List
      sx={{ width: '100%', maxWidth: 360}}>
      <ListItem>
        <ListItemIcon>
       {themeMode ?  <DarkModeIcon /> : <LightModeIcon  />}
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary={themeMode  ? "Dark Mode":"Light Mode"} />
        <Switch color='primary' checked={themeMode ? true : false} onClick={()=>{setThemeMode(prev=>!prev)}} />
      </ListItem>
      
    </List>
      <Divider />
   </Box>
  )
}
