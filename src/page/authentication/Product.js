//import { Box, Card, Typography, TextField, Button, Divider } from '@mui/material';
import { useEffect } from 'react';
import { ListProduct } from '../../component/authentication/list-product'
import { Nav } from '../../component/Navbar/navbar'
import { API } from './API'


function Product() {

 

  return (
    <div>
      <Nav />
      <ListProduct />
      <API />
    </div >
  );
}

export default Product;
