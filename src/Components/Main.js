import {  Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Swiper from './MainComponents/Slider'
import Products from './MainComponents/Products'







export default function Main({allProducts}) {

  return (
    <Box flex={{ xs :2 , md:3}} sx={{padding:"20px 5px"}}>
    <Swiper />
    <Box className="my-4 ">
      <Typography variant='h4'sx={{fontWeight:"bold"}} className="s-title" >
        OUR PRODUCTS
      </Typography>
      <Products allProducts={allProducts} />
      
    </Box>
    </Box>
  )
}
