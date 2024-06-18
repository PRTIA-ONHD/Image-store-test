import * as React from 'react';
import { Box } from '@mui/material';
import { useState, useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import image1 from '../Assets/im1.jpg'
import { CardShop } from '../CardShop';
import axios from 'axios';



export const ListProduct = () => {

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    console.log('token',token);
  }, []);

  const handleLogin = () => {
    const axios = require('axios');

    let data = JSON.stringify({
      query:  `query{allUsers{
          id
          username
          email
      }} `,
      variables: {}
    });

    const token = localStorage.getItem("accessToken")

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://192.168.1.141:8000/graphql',

      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token

      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(response.data)


      })

      .catch((error) => {
        console.log(error);
      });
  }


  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const handleAdd = (id, count) => {
    setCart(prevCart => {
      const itemIndex = prevCart.findIndex(item => item.id === id);

      if (itemIndex !== -1) {
        return prevCart.map((item, index) =>
          index === itemIndex ? { id: id, count: count } : item
        );
      } else {
        return [...prevCart, { id: id, count: count }];
      }
    });
  }


  const itemData = [
    {
      id: 1,
      img: image1,
      title: 'Sweater',
      author: '@bkristastucchio',
      price: 599.0,
      // detail: 'A sweater that is knitted with precision. Photography that makes it look luxurious and adds value',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
      price: 99.0,
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
      price: 899.0,
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
      price: 209.0,
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
      price: 1000.0,
    },

  ];
  return (

    <Box sx={{ width: '60%', 
    margin: 'auto', 
    display: 'flex', 
    justifyContent: 'center', 
    bgcolor: 'goldenrod', 
    padding: 2, 
    marginTop: 8 }}>

      <ImageList cols={2} gap={16} sx={{ marginTop: 8.5 }}>

        {itemData.map((item) => (
          <CardShop data={item} onclick={handleAdd} />
        ))}
        
      </ImageList>
          <Box>
            <button onClick={handleLogin}>CHECK</button>
          </Box>
    </Box>
  )
}

export default ListProduct;