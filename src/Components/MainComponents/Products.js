import { Box, Skeleton , styled , Paper, Typography, Container, Button, Divider  } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';



export default function Products({allProducts}) {

    const [show , setShow] = React.useState(3)

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor:  '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        borderRadius:"40px",
      
      }));


  
      function changeShow(num){


        if(num < 0) {
          setShow(3)
          return
        }

        if(allProducts){
          if(show + num >= allProducts.length ){
            setShow(allProducts.length)
          }
          else{
            setShow(prev => prev + num)
          }
        }
        
      }



  return (

//  The Products List 

    <Box sx={{ flexGrow: 1 }} className="my-2">

        <Container fixed sx={{padding : {md:0 , xs :"16px"}}}>
  
    <Grid container spacing={2} className="my-3">
        { allProducts &&  allProducts.slice(0,show).map(item => { return   <Grid item xs={12} md={4}  className="product-container"  > 
             <Item>
              <div className='product-img-container text-center' style={{backgroundImage :`url(http://syriazone-001-site1.ftempurl.com/syriazone/Files/${item.Img})`}}></div>
            
              <Typography title={item.Name}  sx={{color:"dark" , textTransform :"uppercase" , fontWeight:"bold"  }} className="text-dark text-center mt-2 fs-6">
                {item.Name.length > 17 ? `${item.Name.slice(0,17)}..` : item.Name}
              </Typography>
         
                <Box display="flex" justifyContent="space-between" alignItems="center" className=' fw-bold my-2 text-light'>
                  {item.Available !== 0 && item.Active ? <Box  sx={{backgroundColor:"#00e611" , padding:"5px 20px" , borderRadius:"30px"}}>
                    Available
                    </Box> :
                     <Box   sx={{backgroundColor:"#ff1711" , padding:"5px 20px" , borderRadius:"30px"}} >
                    Not Available
                    </Box> }
                  
                  <Box className='mx-2 text-dark' display="flex" fontSize="10px" >
                    
                    <Typography className='mx-1 fw-bold' sx={{color:"#212121" }}>
                      {item.Watch}
                    </Typography>
                    <VisibilityIcon size="small" sx={{color:"#212121"}} />
                  </Box>
                </Box>

                <Divider className='text-dark bg-dark my-2'/>
                <Box className='text-center'>
                  <Link to={"product/"+item.ID}>
                  <Button variant="outlined" size='medium' >See Details </Button>
                  </Link>
               
                </Box>
                <Box>

                </Box>

        
          
            </Item>  
           
    </Grid>
        })}


   



        {/* Skeletons Simialr to the Products Until it Recieved  */}

        {!allProducts &&  <> { Array(3).fill().map(item =>{
            return  <Grid item xs={12} md={4}  className="product-container" key={Math.random()} > 
              <Skeleton variant="rectangular" width="100%" height="320px" sx={{borderRadius :"40px"}} />
             </Grid>
        })}
   </>   
   }

    </Grid>
    </Container>

     {/* Show More And Less Products  */}

     <Box className='mt-4 text-center'>
      {allProducts && <>
      {show < allProducts.length ? <Button  variant="contained" size='large' onClick={()=>{changeShow(3)}}>{show + 3 >= allProducts.length ? "Show All" : "Show More"}</Button> : <Button  variant="contained" size='large' onClick={()=>{changeShow(-3)}}>Show Less</Button>}
      </>}

    </Box> 


  
   
  </Box>

  )
}
