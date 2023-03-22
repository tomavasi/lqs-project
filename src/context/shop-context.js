import React, { createContext, useEffect, useState} from 'react'

import { useFetch } from '../useFetch';

export const ShopContext = createContext(null);



export const ShopContextProvider = ({children}) => {
    const [cartItems,setCartItems] = useState([]);

    const getQuantity = (itemId) =>{
        const quantity = cartItems.find(product =>product.id === itemId)?.amount;
        if (quantity === undefined){
            return 0;
        }
        return quantity;
    }
    const addToCart = (itemId) =>{
        const quantity = getQuantity(itemId)

        if (quantity === 0) {
            setCartItems(
                [...cartItems,
                    {id : itemId,
                    amount : 1}
                     ]

            )
        }
        else {
            setCartItems(
                cartItems.map(
                    product =>
                    product.id === itemId
                ? {...product, amount: product.amount + 1} : product
            ))
        }
    }
    const removeFromCart = (itemId) =>{
        const quantity = getQuantity(itemId)
        quantity === 1 ? setCartItems  (cartItems =>
            cartItems.filter(currentItem => {return currentItem.id !== itemId})
            ) :
        setCartItems(
            cartItems.map(
                product =>
                product.id === itemId
            ? {...product, amount: product.amount - 1} : product
        ))
    }

    const contextValue = {cartItems, getQuantity, addToCart, removeFromCart}
return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
};
