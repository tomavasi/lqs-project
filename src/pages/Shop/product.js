import React, { useContext } from 'react'
import "../Shop/shop.css"
import { ShopContext } from '../../context/shop-context'

export const Product = (props) => {

  const { getQuantity, addToCart,removeFromCart} = useContext(ShopContext);
  const cartItemAmount = getQuantity(props.data.id)


  return (
    <div>
        <div className='productbox'>
        <div className='productimg'>
        <img src={props.data.image_link} alt={props.data.name}/>
        </div>
        <div className='description'>
            <p className='productname'>
                {props.data.name}
            </p>
            <p className='productprice'>
                {props.data.price} €
            </p>
            {/* <p>
            {props.data.description}
            </p> */}
        </div>
        </div>
        <div className='productbtn'>
        <button className="addToCartBttn" onClick={()=> addToCart(props.data.id)} >Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        {/* <button className="addToCartBttn" onClick ={()=>removeFromCart(props.data.id)}>Remove</button> */}
        </div>
    </div>
  )
}
