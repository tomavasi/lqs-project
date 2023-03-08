import React from 'react'
import "../Shop/shop.css"

export const Product = (props) => {
  return (
    <div className='shoppinglist'>
        <img src={props.data.image_link}/>
        <div className='description'>
            <p>
                {props.data.name}
            </p>
            <p>
                {props.data.price}
            </p>
        </div>
    </div>
  )
}
