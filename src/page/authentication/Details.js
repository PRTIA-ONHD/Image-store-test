import React, { useState, useEffect } from 'react'
import { Nav } from '../../component/Navbar/navbar'
import { Box } from '@mui/material';
import './Details.css'

export const Details = ({data}) => {

    const [Add, setAdd] = useState(0);

    const handleAdd = () => {
        setAdd((Add) => Add + 1);
    };

    const searchParams = new URLSearchParams(window.location.search);

    const [itemData] = useState({
        id: searchParams.get('id'),
        img: searchParams.get('img'),
        title: searchParams.get('title'),
        author: searchParams.get('author'),
        price: searchParams.get('price'),

    })
    useEffect(() => {
        console.log(itemData);
      }, [itemData]);

      
    console.log(itemData)

    return (
        <Box>
            <Nav />
            <Box className='contant'>
                <Box sx={{ margin: 8 }}>
                    <h1>Name: {itemData.title}</h1>
                    <h2>By: {itemData.author}</h2>
                    <div className='pixel'>
                        <img src={itemData.img} alt='item'></img>
                    </div>
                    <h2>${itemData.price}</h2>

                      <button
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80px', height: '30px', fontSize: '16px', border: '1px solid #ccc' }}
                onClick={(e) => {
                    if (e.target.classList.contains('increment')) {
                        handleAdd()

                        // handleAdd(item.id)

                    } else if (e.target.classList.contains('decrement') && Add > 0) {
                        setAdd((Add) => Add - 1);
                    }
                }}
            >
              
                <span className="increment" style={{ borderRight: '1px solid #ccc', padding: '0 5px' }}>+</span>
                <span style={{ margin: '0 5px', padding: '0 5px' }}>{Add}</span>
                <span className="decrement" style={{ borderLeft: '1px solid #ccc', padding: '0 5px' }}>-</span>

            </button>  

                </Box>
            </Box>
        </Box>
    )
}
export default Details