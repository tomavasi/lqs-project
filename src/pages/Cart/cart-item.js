import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'


export const CartItem = (props) => {

   const {removeFromCart, clearCart} = useContext(ShopContext);


    return (

    <div className='shoppingList'>
        <img src={props.data?.image_link} alt={props.data?.name}/>
        <div className='description'>
            <p>
                {props.data?.name}
            </p>
            <p>
                {props.data?.price}
            </p>
            <p>
                {props.amount}
            </p>
            <p>
                {props.amount * props.data?.price}
            </p>
            <button onClick={()=> removeFromCart(props.data?.id)}>
                Remove Item
            </button>
            <button onClick={()=> clearCart(props.data?.id)}>
                Clear item
            </button>
        </div>
  </div>)
}
