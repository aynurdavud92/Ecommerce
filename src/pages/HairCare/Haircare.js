import React from 'react'
import './Haircare.css'
import {Box,Container,Grid,List,ListItem,Button, Select, MenuItem, FormControl, InputLabel, styled } from '@mui/material';
import {Link,NavLink} from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Product1 from '../../img/product1.jpg';
import Product10 from '../../img/product10.jpg';
import Product3 from '../../img/product3.jpg';
import Product4 from '../../img/product4.jpg';
import Product9 from '../../img/product9.jpg';
import Product11 from '../../img/product11.jpg';
import Product7 from '../../img/product7.jpg';
import Product8 from '../../img/product8.jpg'

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
const TransparentSelect = styled(Select)({
    backgroundColor: 'transparent',
    '& .MuiSelect-select': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#007bff',
    },
  });

function Haircare() {
    const [value, setValue] = React.useState('');

        const handleChange = (event) => {
          setValue(event.target.value);
        };
  return (
  
    <Box className='container'>
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" >
        <Link underline="hover"  href="/Home.js" style={{textDecoration:'none',color:'grey',fontSize:'18px'}}>
          Home
        </Link>
        <Link
        style={{textDecoration:'none',color:'grey',fontSize:'18px'}}
          underline="hover"
          
          href="/material-ui/getting-started/installation/"
        >
          Hair Care
        </Link>
        =
      </Breadcrumbs>
    </div>
    <Box className='bath_body__title' style={{fontSize:'48px'}}>Hair Care</Box>
    
    <Box className='bath_body__description'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt.


    </Box>
    <Box style={{display:'flex',justifyContent:'space-between',marginTop:'48px'}}>
    <Box style={{color:'#3f3e3e'}}>Showing all 8 results</Box>
    <FormControl variant="outlined" style={{width:'170px',height:'40px'}}>
      
      <TransparentSelect
       
        id="transparent-select"
        value={value}
        onChange={handleChange}
        
      >
        <MenuItem value="option1">Default Sorting</MenuItem>
        <MenuItem value="option2">Sort by popularity</MenuItem>
        <MenuItem value="option3">Sort by avarage rating</MenuItem>
        <MenuItem value="option4">Sort by latest</MenuItem>
        <MenuItem value="option5">Sort by price: low to high</MenuItem>
        <MenuItem value="option6">Sort by proce:high to low</MenuItem>
      </TransparentSelect>
    </FormControl>
    </Box>
          <Box className='products_cover'>
             
             <Grid container spacing={2}>
                  <Grid item xs={3} >
                      <Box className='product_item'>
                      <Link><img src={Product9} alt="product9" /></Link>
                      <Box className="product_category">Bath & Body</Box>
                      <Link style={{textDecoration:'none'}}><Box className='product_title'>
                      Avocado extract shower gel
                        </Box></Link>
                      <Box className='product_price'>
                        $12.90
                      </Box>
                      </Box>
                  </Grid>
                  <Grid item xs={3} >
                      <Box className='product_item'>
                      <Link><img src={Product1} alt="product1" /></Link>
                      <Box className="product_category">Bath & Body</Box>
                      <Link style={{textDecoration:'none'}}><Box className='product_title'>
                      Avocado extract shower gel
                        </Box></Link>
                      <Box className='product_price'>
                        $12.90
                      </Box>
                      </Box>
                  </Grid>
                  <Grid item xs={3} >
                     <Box className='product_item'>
                    <Link> <img src={Product3} alt="product3" /></Link>
                    <Box className="product_category">Bath & Body</Box>
                      <Link style={{textDecoration:'none'}}><Box className='product_title'>
                      Avocado extract shower gel
                        </Box></Link>
                      <Box className='product_price'>
                        $12.90
                      </Box>
                      </Box>
                  </Grid>
                  <Grid item xs={3} >
                      <Box className='product_item'>
                     <Link> <img src={Product4} alt="product4" /></Link>
                     <Box className="product_category">Bath & Body</Box>
                      <Link style={{textDecoration:'none'}}><Box className='product_title'>
                      Avocado extract shower gel
                        </Box></Link>
                      <Box className='product_price'>
                        $12.90
                      </Box>
                      </Box>
                  </Grid>
                  <Grid item xs={3} >
                      <Box className='product_item'>
                     <Link> <img src={Product10} alt="product10" /></Link>
                     <Box className="product_category">Bath & Body</Box>
                      <Link style={{textDecoration:'none'}}><Box className='product_title'>
                      Avocado extract shower gel
                        </Box></Link>
                      <Box className='product_price'>
                        $12.90
                      </Box>

                      </Box>
                  </Grid>
                  <Grid item xs={3} >
                      <Box className='product_item'>
                      <Link><img src={Product7} alt="product7" /></Link>
                      <Box className="product_category">Bath & Body</Box>
                      <Link style={{textDecoration:'none'}}><Box className='product_title'>
                      Avocado extract shower gel
                        </Box></Link>
                      <Box className='product_price'>
                        $12.90
                      </Box>
                      </Box>
                  </Grid>
                  <Grid item xs={3} >
                     <Box className='product_item'>
                    <Link> <img src={Product11} alt="product11" /></Link>
                    <Box className="product_category">Bath & Body</Box>
                      <Link style={{textDecoration:'none'}}><Box className='product_title'>
                      Avocado extract shower gel
                        </Box></Link>
                      <Box className='product_price'>
                        $12.90
                      </Box>
                      </Box>
                  </Grid>
                  <Grid item xs={3} >
                      <Box className='product_item'>
                      <Link><img src={Product8} alt="product8" /></Link>
                      <Box className="product_category">Bath & Body</Box>
                      <Link style={{textDecoration:'none'}}><Box className='product_title'>
                      Avocado extract shower gel
                        </Box></Link>
                      <Box className='product_price'>
                        $12.90
                      </Box>
                      </Box>
                  </Grid>
              </Grid>
             
          </Box>
    </Box>
  )
}

export default Haircare