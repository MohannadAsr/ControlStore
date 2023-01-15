import React from "react";
import { Routes , Route} from "react-router-dom"
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Settings from "./Components/Settings";
import ProductInfo from "./Components/ProductInfo";
import Main from "./Components/Main";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import axios from "axios"
import { green } from "@mui/material/colors";



function App() {


  const [allProducts , setAllProducts] = React.useState(null)
  const [themeMode , setThemeMode] = React.useState(true) // true For Dark , false For Light

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary:{
        main:"#4050a5"
      
      }
      
      
    },
  });

  const lightTheme = createTheme({
    palette:{
      mode : "light" ,
      primary:{
        main:"#4050a5" 
      } ,
      lightColor:{
        main:green[300]
      },
      background : {
        default : "#fafafa"
      }

    }
  })

  React.useEffect(()=>{
   
    setTimeout(() => {
      axios.get("https://syriazone-001-site1.ftempurl.com/syriazone/api/Syriazone/GetAllProducts.aspx").then(res => console.log(setAllProducts(res.data) ))
    }, 4000);
    

  },[])



  return (
    <ThemeProvider theme={themeMode  ? darkTheme : lightTheme }>
      <CssBaseline />
  
    <NavBar themeMode={themeMode} setThemeMode={setThemeMode} />
    <Stack direction="row" sx={{display :"flex" , justifyContent:"space-between"}} >

      <SideBar />
     <Routes>
      <Route path={["/","/ControlStore","/ControlStore/","ControlStore"]} element={ <Main allProducts={allProducts} />} />
      <Route path="product/:productID" element={ <ProductInfo allProducts={allProducts} />} />
     </Routes>
   
      <Settings themeMode={themeMode} setThemeMode={setThemeMode}  />
    </Stack>



   </ThemeProvider>
    
  );
}

export default App;
