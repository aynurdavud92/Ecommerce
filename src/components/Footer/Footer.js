import React from 'react'
import './Footer.css'
import {Box,Container,Grid,List,ListItem,Button} from '@mui/material';
import {Link,NavLink} from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
   <Container>
    <Box style={{padding:'24px',borderBottom:'1px solid rgb(185, 185, 185)'}}>
        <Grid container spacing={2}>
          <Grid item xs={6} >
            <Box style={{ fontSize: '32px', fontWeight: 600, marginBottom: '48px',textAlign:'left' }}>Have questions?</Box>
            <Box className='mail_submit__btn'>
              <Button >
                Submit
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6} style={{display:'flex',gap:'16px'}}>
            <Box >
            <h3 style={{textAlign:'left'}}>Track Your Order
            </h3>
            <Box style={{marginBottom:'24px',marginTop:'24px',textAlign:'left' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
            </Box>
            <Link style={{textDecoration:'none',color:'#7e8427',marginLeft:'-24px' }}>Track Your Order</Link>
            </Box>
            < Box >
            <h3 style={{textAlign:'left'}}>Return & Refund
            </h3>
            <Box style={{marginBottom:'24px',marginTop:'24px',textAlign:'left' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
            </Box>
            <Link style={{textDecoration:'none',color:'#7e8427',marginLeft:'-24px' }}>Read More</Link>
            </Box>
          </Grid>
        </Grid>
    </Box>
    <Box style={{display:'flex',gap:'40px',paddingTop:'48px',}}>
      <Box className='links'>
        <Box style={{fontSize:'18px',fontWeight:'700',textAlign:'left',marginLeft:'16px',letterSpacing:'0.5px'}}>Useful Links</Box>
        <Box>
        <List sx={{width:'100%'}}>
          <ListItem>
            <NavLink to='/'>
              About Us
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
              Contact Us
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
              Best Deals
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
              FAQs
            </NavLink>
          </ListItem>
         
          </List>
        </Box>
      </Box>
      <Box className='links'>
        <Box style={{fontSize:'18px',fontWeight:'700',textAlign:'left',marginLeft:'16px',letterSpacing:'0.5px'}}>Categories</Box>
        <Box>
        <List sx={{width:'100%'}}>
          <ListItem>
            <NavLink to='/'>
              Bath & Body
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
              Skin Care
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
              Hair Care
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
              Face Wash & Packs
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
              Body Care & Soaps
            </NavLink>
          </ListItem>
          </List>
        </Box>
      </Box>
      <Box className='links'>
        <Box style={{fontSize:'18px',fontWeight:'700',marginLeft:'16px',textAlign:'left',letterSpacing:'0.5px'}}>Contact Us</Box>
        <Box>
        <List sx={{width:'100%'}}>
          <ListItem>
            <NavLink to='/'>
              123 Fifth Avenue, New York, NY 10160

            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
             929-242-6868
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
              contact@info.com

            </NavLink>
          </ListItem>
         
         
          </List>
          <Box style={{display:'flex',gap:'24px',marginTop:'32px',marginLeft:'16px'}}>
            
           <FacebookIcon/> 
           <TwitterIcon/>
           <YouTubeIcon/>
           <InstagramIcon/>

           
          </Box>
        </Box>
      </Box>
      <Box >
      <Box style={{fontSize:'22px',fontWeight:'700',textAlign:'left',letterSpacing:'0.5px'}}>Subscribe Now</Box>
      <Box>
        <form>
        <input type="email" id="email" name="email" className='subscribe__input' placeholder='Email' />

        </form>
       <Box className='mail_submit__btn'>
       <Button >
          Submit
        </Button>
       </Box>
      </Box>
      </Box>

    </Box>
   </Container>
  )
}

export default Footer