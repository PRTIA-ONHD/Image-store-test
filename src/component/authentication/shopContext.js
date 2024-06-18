// import React, { createContext, useState } from 'react'
// export const shopContext = createContext(null);

// const getDefaultCart = () => {
//     let cart = {}
//     for (let i = 1; i < itemData.length, +1; i++) {
//         cart[i] =0;

//     }
//     return cart;
// }

// export const shopContextProvider = (props) => {
//     const [cartItems, setCartItems] = useState(getDefaultCart());

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({...prev, [itemId]: prev[itemId] +1}))
//     }

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({...prev, [itemId]: prev[itemId] -1}))
//     }

//     const contextValue = {cartItems, addToCart, removeFromCart};

//     console.log(car);

//   return (
//     <shopContext.Provider value={contextValue}>{props.children}</shopContext.Provider>
//   )
// }
