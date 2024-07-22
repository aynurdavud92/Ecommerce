import React from 'react'
import './About.css'
import {Box,Container,Grid,ListItem,Drawer,Button,Divider,ListItemButton,ListItemIcon,ListItemText,} from '@mui/material';
import {NavLink,Link} from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Founder from '../../img/about-01-free-img.jpg';
import Signature from '../../img/signature-free-img.png';
import First from '../../img/first.png'
import Second from '../../img/second.png'
import Third from '../../img/third.png'
import Four from '../../img/four.png'
import Five from '../../img/five.png'
import Six from '../../img/six.png'
import Seven from '../../img/seven.png'
import Eight from '../../img/eight.png'

function About() {
  return (
    <Box>
      <Box className='about_title'>
        <Box className='about_title__text'>About Us</Box>
      </Box>
      <Box className='ingredients'>
        <Box className='ingredients_title'>
          <Link> Natural Ingredients Only</Link> is our philosophy<br /> for our beauty care products.
        </Box>
        <Box className='ingredients_description__cover'>
          <Box className='ingredient_description'>
            <b>We are all about lorem ipsum dolor sit amet</b><br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
<br/><br/><br/>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
<br/><br/><br/>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
<br/><br/><br/>

          </Box>
        </Box>
        <Box style={{fontSize:'28px',fontWeight:'600',marginTop:'200px',textAlign:'left',marginLeft:'64px'}}>
        Everything we need to nourish our bodies can be found in <br/>nature, so lorem ipsum dolor sit amet

        </Box>
        <Box style={{color:'#7e8427',fontSize:'32px',textAlign:'left',marginLeft:'64px'}}>
          __________
        </Box>
      </Box>
      <Box className='founder'>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6} >
              <Box className='founder_details__cover'>
                <Box className='founder_details'>
                  <Box className='founder_details__title' >
                    Meet the founder
                  </Box>
                  <Box className='founder_details__subtitle'>Jennifer Oliver</Box>
                  <Box className='founder_description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                   
                  </Box>
                </Box>
                <img style={{ marginLeft: '120px', opacity: 0.3 }} src={Signature} alt="logo" />


              </Box>
            </Grid>
            <Grid item xs={6} >
              <img src={Founder} alt="logo" />

            </Grid>


          </Grid>
        </Container>
      </Box>
      <Box className='advantages'>
          <Box style={{fontWeight:500,maxWidth:'450px',fontSize:'26px',textAlign:'start'}}>
          We use only natural ingredients for our products, which are good for you and the environment too.
          </Box>
          <Box style={{display:"flex",gap:'48px',marginLeft:'160px'}}>
            <Box>
            <img src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/icon-01-free-img.png" alt="logo" />
            <br/>Natural Ingredients
            </Box>
            <Box>
            <img src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/icon-02-free-img.png" alt="logo" />
            <br/>Cruelty Free
            </Box>
            <Box>
            <img src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/icon-03-free-img.png" alt="logo" />
            <br/>Carbon Natural
            </Box>
            <Box>
            <img src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/icon-04-free-img.png" alt="logo" />
            <br/>Recyclable Packaging
            </Box>
          </Box>
        </Box>
        <Box className='fixedbg'>

        </Box>
        <Box className='featuredOn'>
        <Container>
          <Box style={{fontSize:'38px',marginBottom:'32px',justifyContent:'center'}}>Featured On</Box>
          <Box style={{display:'flex',gap:'16px' ,marginBottom:'32px'}}>
          <img src={First} alt="first" />
          <img src={Second} alt="second" />
          <img src={Third} alt="third" />
          <img src={Four} alt="four" />
          <img src={Five} alt="five" />

          </Box>
          <Box style={{display:'flex',gap:'16px' ,marginBottom:'32px',justifyContent:'center'}}>
          <img src={Six} alt="six" />
          <img src={Seven} alt="seven" />
          <img src={Eight} alt="eight" />
         

          </Box>
        </Container>
      </Box>
    </Box>
    
  )
}

export default About