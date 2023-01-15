import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, List, ListItem, Skeleton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/system';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default function ProductInfo({allProducts}) {


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:  '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    overflow:"hidden",
    borderRadius:"30px",
   
  }));
  const ItemImgs = styled(Paper)(({ theme }) => ({
    backgroundColor:  '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius:"10px",
    width:"50px",
    height:"50px",
    overflow:"hidden",
    
  }));
  


    const params = useParams()
    const myid = params.productID
    const [selected , setSelected] = React.useState(null)
    const [selectedImgs , setSelectedImgs] = React.useState(null)
    const [selectedInfo , setSelectedInfo] = React.useState([])
    const [slide , setSlide] = React.useState(null)
 
    React.useEffect(()=>{

      setTimeout(() => {
        if(allProducts) {
          allProducts.map(item=>{
              if(item.ID === +myid) {setSelected(item)}
              return null
          })
      }
        
      }, 2000);
     

   },[allProducts,myid])
  

  React.useEffect(()=>{

    axios.get(`http://syriazone-001-site1.ftempurl.com/syriazone/api/Syriazone/GetImages.aspx?PID=${myid}`).then(res=> setSelectedImgs(res.data))
    axios.get(`http://syriazone-001-site1.ftempurl.com/syriazone/api/Syriazone/GetDisc.aspx?PID=${myid}`).then(res => setSelectedInfo(res.data))

  },[myid])

  React.useEffect(()=>{

if(selected){
  setSlide(selected.Img)
}

  },[selected])



  return (
  <Box flex={{ xs :2 , md:3}} sx={{padding:"20px 5px"}}> 

    <Grid container spacing={2} className="px-2">


     {/* The Main Img and The Img List of the Product & The Altenative Skeletons  */}

        {selected ? 
        <> 
        <Grid item xs={12} md={8} className="d-flex justify-content-center">
          <Item className='d-flex justify-content-center align-items-center' >
           
               <Box >
                <img src={`http://syriazone-001-site1.ftempurl.com/syriazone/Files/${slide}`} className="img-fluid" alt='product-img' />
              </Box>
            
          </Item>
        </Grid>
         <Grid item xs={12} md={4}>
          <Stack gap={1} direction={{xs:"row",md:"column"}} spacing={1}  className="py-3 d-flex flex-wrap"  alignItems={{xs:"center",md:"flex-start"}} >
           {selectedImgs && selectedImgs.slice(0,5).map(item=>{
            return <ItemImgs onClick={()=>{setSlide(item.Img)}} className={item.Img === slide ? "item-img active" :"item-img"} ><img src={`http://syriazone-001-site1.ftempurl.com/syriazone/Files/${item.Img}`} className="img-fluid" alt='img-list' /></ItemImgs>
           })}
          </Stack>
       </Grid> 
       </>
       :
       <>
       <Grid item xs={12} md={8} className="d-flex justify-content-center">
         <Skeleton variant="rectangular" width="100%" height={340} sx={{borderRadius:"30px"}} />

       </Grid>
       <Grid item xs={12} md={4}>
       <Stack gap={1} direction={{xs:"row",md:"column"}} spacing={1}  className="py-3 d-flex flex-wrap"  alignItems={{xs:"center",md:"flex-start"}} > 
       { Array(4).fill().map(item =>{
            return   <Skeleton variant="rectangular" width="50px" height="50px" sx={{borderRadius :"10px"}} />
    
        })}
       </Stack>

       </Grid>

       </>
        }

        {/* The Availability , Discount , Views , Ratings  */}

        {selected ? 
        <>
        <Grid xs={12} display="flex" alignItems="center" gap={{xs:1,md:2}} flexWrap="wrap" className='mx-3 mt-3'>

          {/* Availablity  */}

          {selected.Available && selected.Active ? 
         <Paper component="h3" className='fw-bold'  sx={{color:"#00e611" , padding:"5px 20px" , borderRadius:"20px"}}>
         In Stock 
         </Paper> :
          <Paper component="h3" className='fw-bold'  sx={{color:"#ff1711" , padding:"5px 20px" , borderRadius:"20px"}} >
         Not Available
         </Paper>
          }
          
         {/* Discount  */}

          { parseInt(selected.Sale) !== 0 && selected.Available && selected.Active   ? 
          <Tooltip title={`${parseInt(selected.Sale)} SYP`} placement="bottom">
          <Paper  component="h4" sx={{padding:"5px 20px" , borderRadius:"20px"}} >Discount</Paper>
          </Tooltip>
          :
          null
          }

          {/* Views  */}
          <Box component="h4" display="flex" alignItems="center" gap="3px" > 
            {selected.Watch} <VisibilityIcon />
          </Box>
        </Grid>
        </> 
        : 
        <>
        <Grid xs={12} display="flex" alignItems="center" gap={{xs:1,md:2}} flexWrap="wrap" className='mx-3 mt-3'>
          {Array(2).fill().map(item=>{
            return  <Skeleton variant="rectangular" width="120px" height="30px" sx={{ padding:"5px 20px" , borderRadius:"20px"}} />
          })}
        </Grid>
        </>
        }

        





        {/* The Product Name   */}

        {selected ?  
        <Grid xs={12} lg={12} className="m-3">
            <Typography variant='h5' className=' my-2 fw-bold'>
              {selected.Title}
            </Typography>
            <Divider />
          </Grid> 
          : 
          <Grid xs={12} lg={12} className="m-3">
            <Skeleton variant="rectangular" width="100%" height={50}  />
          </Grid>
          }

          {/* The Product Information  */}

          {selected ?
           selectedInfo.length !== 0 ? 
          <Grid xs={12} className="mx-2">
            <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant='h6' className='mx-3 fw-bold'>Product Details </Typography>
                  </AccordionSummary>
                  <AccordionDetails >
                          <List sx={{ width: '100%' , bgcolor: 'background.paper' }}>
                            { selectedInfo.map(item => {
                              return <>
                              <ListItem display="flex" alignItems="center" gap={3}>
                              
                              <Typography variant='p' fontSize="19px" fontWeight="bold">{`${item.Title} :`}</Typography>
                              <Typography variant='p' fontSize="17px" className='mx-3'>{item.Info}</Typography>
                              </ListItem>
                              <Divider  />
                              </>
                            })}
                              
                        </List>
                  </AccordionDetails>
          </Accordion>

          </Grid>
          :
         <></>
          :
          <Grid xs={12} className="mx-2"> 
          <Skeleton variant="rectangular" width="100%" height="40px" sx={{ padding:"5px 20px" , borderRadius:"3px"}} />
          </Grid>}
         


         {/* Availability Note If it is under 5 Items Only  */}

         {selected ? 

         
         <Grid xs={12} className="m-3">
          <Typography variant='p' className='fw-bold'>
          
             {selected.Active ? selected.Available <= 4 && selected.Available > 0 ?
              <><Box component="span" color="red" fontSize="19px"> Note: </Box>  Only {selected.Available} Left (Order Soon) </>  
              :
               selected.Available === 0 && 
               <><Box component="span" color="red" fontSize="19px"> Note: </Box> This Product is Out of the Stock Right Now</>  
              : 
              <><Box component="span" color="red" fontSize="19px"> Note: </Box> This Product is Not Available For Deleviring Now</> 
            }
          </Typography>
         </Grid> 
         
         :

         <Grid xs={12} className="m-3">
          <Skeleton variant="rectangular" width={300} height={20} />
        </Grid>
          }


         {/* Product Add Button and Price  */}

         {selected ?
         selected.Available && selected.Active ? 
         <Grid xs={12} display="flex" alignItems="center" flexWrap="wrap" gap={{xs:3,md:1}} justifyContent={{xs:"center",md:"space-between"}} className='mx-2 mb-4'> 
         {selected.Sale !== 0 ? 
         <>
         <Box display="flex" alignItems="center" >
           <Typography variant='h5' className='fw-bold' display="flex" gap={2}>  Price : <Box className='text-muted' sx={{textDecoration:"line-through"}}> {selected.Price}  </Box> <Box>{selected.Price - parseInt(selected.Sale)} SYP</Box>  </Typography> 
         </Box> 
         </>
         : 
         <Box>
          <Typography variant='h5' className='fw-bold' display="flex" gap={2}>  Price : {selected.Price}  </Typography> 
         </Box> 
         }
         <Box><Button variant='contained' size='large' endIcon={<ShoppingCartIcon />}>Add To Cart</Button></Box>

         </Grid> 
         :
         <></>
         :
         <Grid xs={12} display="flex" alignItems="center" flexWrap="wrap" gap={{xs:3,md:1}} justifyContent={{xs:"center",md:"space-between"}} className='mx-2 mb-4'>  
         <Skeleton variant="rectangular" width={300} height="40px" sx={{ padding:"5px 20px" , borderRadius:"3px"}} />
         <Skeleton variant="rectangular" width={130} height="50px" sx={{ padding:"5px 20px" , borderRadius:"3px"}} />
         </Grid> 
         }
       

       
        
      </Grid>

    
    </Box>
  )
}
