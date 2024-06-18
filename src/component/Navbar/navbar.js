import React, { useState } from "react";
import { AppBar, Box, Typography, Toolbar, IconButton,Drawer, Divider } from '@mui/material';
import { Link } from "react-router-dom";
import "../../component/Navbar/navbarSty.css";
import ListIcon from '@mui/icons-material/List';

export const Nav = () => {

  const [mobileOpen, setMobileOpen] = useState(false)
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ bgcolor: 'black'  }}>
          <Typography 
          color={'goldenrod'} 
          variant="h5" 
          component="div" 
          sx={{ flexGrow: 1, textAlign: 'center',my: 1.5 }}> 
          
          SUEA-PA (เสื้อผ้า)  
          </Typography>
            <Divider color={'goldenrod'}/>
              <ul className="mobile-navigation">
                <li>
                  <Link to={'/Product'}>Product</Link>
                </li>
                <li>
                  <Link to={'/Cart'}>Cart</Link>
                </li>
                <li>
                  <Link to={"/Login"}>Log out</Link>
                </li>
              </ul>
    </Box>
  )

  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: 'none' },
              }} onClick={handleDrawerToggle}>
              <ListIcon />
            </IconButton>
            <Typography
              color={'goldenrod'}
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 ,fontSize: 25}}>
              PhotoSET
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={'/Product'}>Product</Link>
                </li>
                <li>
                  <Link to={'/Cart'}>Cart</Link>
                </li>
                <li>
                  <Link to={"/Login"}>Log out</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer 
          variant="temporary" 
          open={mobileOpen}
            onClick={handleDrawerToggle} 
            sx={{ 
              display: { xs: 'block', sm: 'none' } , 
              "& .MuiDrawer-paper":{
              boxSizing: "border-box",
              width: "240px",
            }}}>
              {drawer}
          </Drawer>
        </Box>
        {/* <Box sx={{p:2}}>
                <Toolbar/>
        </Box> */}
      </Box>
    </>

  );
};