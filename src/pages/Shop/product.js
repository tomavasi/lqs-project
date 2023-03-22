import React, { useContext } from 'react'
import "../Shop/shop.css"
import { ShopContext } from '../../context/shop-context'

export const Product = (props) => {
  const {cartItems, getQuantity, addToCart,removeFromCart} =useContext(ShopContext);
  const cartItemAmount = getQuantity(props.data.id)
  console.log(cartItems)
  return (
    <div className='shoppinglist'>
        <img src={props.data.image_link} alt={props.data.name}/>
        <div className='description'>
            <p>
                {props.data.name}
            </p>
            <p>
                {props.data.price}
            </p>
        </div>
        <button className="addToCartBttn" onClick={()=> addToCart(props.data.id)} >Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        <button className="addToCartBttn" onClick ={()=>removeFromCart(props.data.id)}>Remove</button>
    </div>
  )
}
