import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge'
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {  Container,  InputBase  } from '@mui/material';
import { Link } from 'react-router-dom';

import MobileMenu from './NavBarComponents/MobileMenu';




export default function NavBar({themeMode , setThemeMode}) {

  
 



    const LogoField = styled(Box)(({theme})=>({
      display : "flex" , alignItems:"center" , gap:"5px" , borderRadius:"30px"
    }))

   

  
    const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '40%',
      },
    }));
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }));
    
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'inherit',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        
      },
    }));
   

    
  return (
   
<>
      <AppBar position='sticky'>
        
        <Toolbar >
          <Container sx={{ display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>

            {/* Site Logo  */}

      <Link to={"/"} className="text-light">
          <LogoField  >
            <StorefrontIcon size="large" />
            <Typography variant='h6'  >
              My Market
            </Typography>
          </LogoField>
      </Link>

       {/* Search Bar  */}

          <Search sx={{display:{xs:"none" , md:"block"}}} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {/* Icons Buttons For Notifications And User  */}

       <Box display="flex" justifyContent="center" sx={{display:{xs:"none" , md :"flex"}}}>
    
          <IconButton color='inherit' size='large' >
              <Badge badgeContent={1} color="error">
                <NotificationsIcon sx={{color:"white"}} />
              </Badge >
          </IconButton>
          <IconButton color='inherit' size='large' >
              <Badge badgeContent={5} color="error">
                <ShoppingCartIcon sx={{color:"white"}} />
              </Badge >
          </IconButton>
          <IconButton color='inherit' size='large'  >
                <AccountCircle sx={{color:"white"}}  />
          </IconButton>
            
      </Box>

     {/* Mobile Menu Show Only on Mobile Instead of the Icons  */}

      <MobileMenu themeMode={themeMode} setThemeMode={setThemeMode} />
          
      
         
          </Container>

        
        </Toolbar>

      

       
      </AppBar>

        

</>

      
 


   
  )
}
