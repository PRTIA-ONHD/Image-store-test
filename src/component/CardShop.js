import React, { useState } from 'react'
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


export const CardShop = ({data,onclick}) => {

    // const [Add, setAdd] = useState(0);
    const navigate = useNavigate();
    
    // const handleAdd = (id) => {
    //     setAdd((Add) => Add + 1);
    //     onclick(id,Add + 1)
    // };

    return (
        <ImageListItem key={data.img}>
            <img
                srcSet={`${data.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${data.img}?w=248&fit=crop&auto=format`}
                alt={data.title}
                loading="lazy"
            />

            <ImageListItemBar
                subtitle={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <h1>{data.title}</h1>
                            <h3>By: {data.author}</h3>
                            <h3>Price: ${data.price}</h3>

                            <Button variant="contained" color="secondary" sx={{width:10,height:20}}
                            onClick={() => navigate(
                                `/Details?id=${data.id}
                                &&title=${data.title}
                                &&author=${data.author}
                                &&price=${data.price}
                                &&img=${data.img}`)} >
                            Detail
                        </Button>
                        </Box>
                    </Box>
                }
                position="below"
            />

            {/* <button
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80px', height: '30px', fontSize: '16px', border: '1px solid #ccc' }}
                onClick={(e) => {
                    if (e.target.classList.contains('increment')) {
                        handleAdd(data.id)

                        //handleAdd(item.id)

                    } else if (e.target.classList.contains('decrement') && Add > 0) {
                        setAdd((Add) => Add - 1);
                    }
                }}
            >
                <span className="increment" style={{ borderRight: '1px solid #ccc', padding: '0 5px' }}>+</span>
                <span style={{ margin: '0 5px', padding: '0 5px' }}>{Add}</span>
                <span className="decrement" style={{ borderLeft: '1px solid #ccc', padding: '0 5px' }}>-</span>

            </button>   */}
            

             {/* <div>
                <button className='addToCartBttn'>AddtoCart</button>
              </div> */}

        </ImageListItem>)
}
