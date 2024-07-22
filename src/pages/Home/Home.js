import React from 'react'
import './Home.css'
import {Box,Container,Grid} from '@mui/material';
import {Link} from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Signature from '../../img/signature-free-img.png';
import Founder from '../../img/about-01-free-img.jpg';
import TopOne from '../../img/top1.png'
import TopSecond from '../../img/top2.png'
import TopThird from '../../img/top3.png'
import TopFour from '../../img/top4.png'
import TopFive from '../../img/top5.png'
import First from '../../img/first.png'
import Second from '../../img/second.png'
import Third from '../../img/third.png'
import Four from '../../img/four.png'
import Five from '../../img/five.png'
import Six from '../../img/six.png'
import Seven from '../../img/seven.png'
import Eight from '../../img/eight.png'

function Header() {
  return (
    <Box>
        
      <Box className='new_arrival'>
        <Box className='new_arrival_text'>
            <Box>
                NEW ARRIVAL
            </Box>
            <Box className='new_arrival_title'>
                Nourish delicate skin & <br></br>hair package
            </Box>
            <Box className='new_arrival__description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br></br> do eiusmod tempor incididunt
            </Box>
            <Link href='#'>Shop Now</Link>
        </Box>
        
        </Box>
        <Box className='advantages'>
          <Box style={{fontWeight:500,maxWidth:'380px',fontSize:'18px'}}>
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
      <Box className='bestSellers'>
        <Container>
          <Box style={{fontSize:'40px',fontWeight:'600'}}>Bestsellers</Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>

              <Grid container spacing={2}>
                <Grid item xs={6} style={{marginTop:'16px'}}>
                <img src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/product-01-free-img.jpg" alt="" />
                <Box className='bestseller_title'>
                  <Link>Luxurious locks at <br/> lower prices</Link>
                </Box>
                <Box className='bestseller_price'>$12,25</Box>
                </Grid>
                <Grid item xs={6} style={{marginTop:'16px'}}>
                <img src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/product-02-free-img.jpg" alt="" />
                <Box className='bestseller_title'>
                  <Link>Cleanse & Protect <br/> duo pack</Link>
                </Box>
                <Box className='bestseller_price'>$23,55</Box>
                </Grid>
                <Grid item xs={6} style={{marginTop:'16px'}}>
                <img src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/product-04-free-img.jpg" alt="" />
                <Box className='bestseller_title'>
                  <Link>Drift off naturally <br/>and refreshed pack</Link>
                </Box>
                <Box className='bestseller_price'>$49,90</Box>
                </Grid>
                <Grid item xs={6} style={{marginTop:'16px'}}>
                <img src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/product-05-free-img.jpg" alt="" />
                <Box className='bestseller_title'>
                  <Link>Australian clay tea <br/> tree cream</Link>
                </Box>
                <Box className='bestseller_price'>$15,25</Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} style={{marginTop:'16px'}}>
                <img src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/product-03-free-img.jpg" alt="" />
                <Box className='bestseller_title'>
                  <Link>Smooth skin super <br/> booster</Link>
                </Box>
                <Box className='bestseller_price'>$10,25</Box>
                </Grid>

          </Grid>
        </Container>
      </Box>
      <Box className='categories'>
        <Grid container spacing={2}>
          <Grid item xs={4} >
            <Box className='categories_skin_cover'>
              <Box className='categories_skin'>
              <Box className='categories_subtitle'>
                Skin Care Products
              </Box>
              <h2 className='categories_title'>
                Skin Care
              </h2>
              <Link href='#'>Shop Now</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} >
            <Box className='categories_hair_cover'>
              <Box className='categories_skin'>
              <Box className='categories_subtitle'>
                Skin Care Products
              </Box>
              <h2 className='categories_title'>
                Hair Care
              </h2>
              <Link href='#'>Shop Now</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} >
            <Box className='categories_body_cover'>
              <Box className='categories_skin'>
              <Box className='categories_subtitle'>
                Skin Care Products
              </Box>
              <h2 className='categories_title'>
                Body Care
              </h2>
              <Link href='#'>Shop Now</Link>
              </Box>
            </Box>
          </Grid>
          
        </Grid>
      </Box>
      <Box className='gifts_cover'>
        <Box style={{position:'relative'}}>
        <img src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/bg-03-free-img.png" alt="logo" />
        <Box className='gifts'>
          <h2 style={{fontSize:'42px',textAlign:'left',fontWeight:'600'}}>
          You deserve a little gift that says "love" 
          </h2>
          <Box className='gifts_description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Box>
          <Link href='#'>Choose Your Products</Link>
        </Box>
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
           <img style={{marginLeft:'120px',opacity:0.3}} src={Signature} alt="logo" />
           

           </Box>
          </Grid>
          <Grid item xs={6} >
          <img  src={Founder} alt="logo" />

          </Grid>
          
          
        </Grid>
      </Container>
      </Box>
      <Box className='topfive'>
       <Container>
        <h2 style={{fontWeight:'600',letterSpacing:'1px',marginBottom:'32px'}}>
          FOUNDERS TOP 5 FAVORITES
        </h2>
       <Box className='topProducts'>
          <Box>
            <Box className='top_product__image'>
            <img src={TopOne} alt="first" />

            </Box>
            <Box className='top_product__title'>
              <Link>
              Replumping conditioner<br/> lorem ipsum</Link>
            </Box>
            <Box className='top_product__price'>$19.50</Box>
          </Box>
          <Box>
            <Box className='top_product__image'>
            <img src={TopSecond} alt="first" />

            </Box>
            <Box className='top_product__title'>
              <Link>
              Replumping conditioner<br/> lorem ipsum</Link>
            </Box>
            <Box className='top_product__price'>$19.50</Box>
          </Box>
          <Box>
            <Box className='top_product__image'>
            <img src={TopThird} alt="first" />

            </Box>
            <Box className='top_product__title'>
              <Link>
              Replumping conditioner<br/> lorem ipsum</Link>
            </Box>
            <Box className='top_product__price'>$19.50</Box>
          </Box>
          <Box>
            <Box className='top_product__image'>
            <img src={TopFour} alt="first" />

            </Box>
            <Box className='top_product__title'>
              <Link>
              Replumping conditioner<br/> lorem ipsum</Link>
            </Box>
            <Box className='top_product__price'>$19.50</Box>
          </Box>
          <Box>
            <Box className='top_product__image'>
            <img src={TopFive} alt="first" />

            </Box>
            <Box className='top_product__title'>
              <Link>
              Replumping conditioner<br/> lorem ipsum</Link>
            </Box>
            <Box className='top_product__price'>$19.50</Box>
          </Box>
        </Box>
       </Container>
      </Box>
      <Box className='featuredOn'>
        <Container>
          <Box style={{fontSize:'32px',fontWeight:'700px',marginBottom:'32px',justifyContent:'center'}}>Featured On</Box>
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
      <Box className='fixed_section'>
        
      </Box>
    </Box>
     
  )
}

export default Header