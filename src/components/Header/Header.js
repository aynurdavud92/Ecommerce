import React from 'react'
import './Header.css'
import {Box,Container,List,ListItem,Drawer,Button,Divider,ListItemButton,ListItemIcon,ListItemText,} from '@mui/material';
import {NavLink} from 'react-router-dom'
import logo from '../../img/logoo.png'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function Header() {
  return (
    
      <Box className='header_cover'>
        <Box >
          <NavLink  to='/home' >
            <img src={logo} alt="logo" />
          </NavLink>
        </Box>
        <Box className='navbar'>
          <List sx={{width:'100%', display:'flex',}}>
          <ListItem>
            <NavLink to='/home'>
              HOME
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='/bathbody'>
              BATH & BODY
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='/haircare'>
              HAIR CARE
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='/skincare'>
              SKIN CARE
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='/gifts'>
              GIFTS
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='/about'>
              ABOUT US
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
              CONTACT
            </NavLink>
          </ListItem>
          </List>
        </Box>
        <Box className='account'>
       <Box>
        $0.00
        <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
       </Box>
        </Box>
      </Box>
    
  )
}

export default Header