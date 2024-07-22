import React , { useState } from 'react'
import './ProductDetails.css'
import {Box,Container,List,Select,Breadcrumbs,styled,Grid,Button,Table,TableRow,ListItemText, TableCell,} from '@mui/material';
import {NavLink,Link} from 'react-router-dom'
import Product from '../../img/product2.jpg';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Product1 from '../../img/product1.jpg';
import Product2 from '../../img/product2.jpg';
import Product3 from '../../img/product3.jpg';
import Product4 from '../../img/product4.jpg';
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
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


function ProductDetails() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const [count, setCount] = useState(1);

    const incrementCount = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    const decrementCount = () => {
      setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
    };
  return (
    
        
      <Box className='product_container'>
          <Box className='product_cover'>
              <Grid container spacing={2}>
                  <Grid item xs={6} >
                      <img style={{maxWidth:'400px'}} src={Product} alt="logo" />

                  </Grid>
                  <Grid item xs={6} >
                      <Box className='product_details'>
                          <div style={{ marginBottom: '24px' }} role="presentation" onClick={handleClick}>
                              <Breadcrumbs aria-label="breadcrumb" >
                                  <Link underline="hover" href="/Home.js" style={{ textDecoration: 'none', color: 'grey', fontSize: '18px' }}>
                                      Home
                                  </Link>
                                  <Link
                                      style={{ textDecoration: 'none', color: 'grey', fontSize: '18px' }}
                                      underline="hover"

                                      href="/material-ui/getting-started/installation/"
                                  >
                                      Skin Care
                                  </Link>
                                  <Link
                                      style={{ textDecoration: 'none', color: 'grey', fontSize: '18px' }}
                                      underline="hover"

                                      href="/material-ui/getting-started/installation/"
                                  >
                                      Body oil anti-cellulite
                                  </Link>

                              </Breadcrumbs>
                          </div>
                          <Link to='/bathbody' style={{ textDecoration: 'none', color: 'rgb(61, 60, 60)', fontSize: '16px' }}>
                              Bath & Body, Skin Care</Link>
                          <Box className='product_name'>
                              Body oil anti-cellulite

                          </Box>
                          <Box style={{ fontSize: '20px', color: 'rgb(61, 60, 60)', marginTop: '12px' }}>
                              <b>$13.25</b> <small>+ Free Shipping</small>
                          </Box>
                          <Box style={{ fontSize: '16px', color: 'rgb(61, 60, 60)', lineHeight: '34px', marginTop: '10px' }}>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br /> do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.


                          </Box>

                          <Box style={{ display: 'flex', gap: '24px', alignItems: "center", marginTop: '16px' }}>
                              <Box >
                                  <Box className='changeCount'>
                                      <Grid container spacing={2}>
                                          <Grid item xs={6} style={{ paddingTop: '22px', fontSize: '24px', color: "rgb(165, 162, 162)" }}>
                                              <span >{count}</span>
                                          </Grid>
                                          <Grid item xs={6} >
                                              <button onClick={incrementCount}>+</button><br />
                                              <button onClick={decrementCount}>-</button>
                                          </Grid>
                                      </Grid>
                                  </Box>
                              </Box>
                              <Box >
                                  <Box className='add_to_cart'>
                                      <Button >
                                          Add To Cart
                                      </Button>
                                  </Box>
                              </Box>
                          </Box>
                      </Box>
                  </Grid>


              </Grid>
              <Box sx={{ width: '100%' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                          <Tab label="Description" {...a11yProps(0)} />
                          <Tab label=" Additional information" {...a11yProps(1)} />
                          <Tab label="Reviews (0)" {...a11yProps(2)} />
                      </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                      <Table>
                          <TableRow>
                              <TableCell>Weight</TableCell>
                              <TableCell >0.5 kg</TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell>Dimensions</TableCell>
                              <TableCell>5 × 3 × 10 cm</TableCell>
                          </TableRow>
                      </Table>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                      
                  </CustomTabPanel>
              </Box>
              <Box>
              <Box style={{ fontSize:'50px',fontWeight:600,marginBottom:'24px',marginTop:'64px',textAlign:'left'}}>Related products</Box>
              <Grid container spacing={2}>
                  <Grid item xs={3} >
                      <Box className='product_item'>
                      <Link to='/productdetails'><img src={Product1} alt="product1" /></Link>
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
                      <Link><img src={Product2} alt="product2" /></Link>
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
                  </Grid>
              </Box>
          </Box>
          <Box>
           
          </Box>




      </Box>


   
     
    
  )
}

export default ProductDetails