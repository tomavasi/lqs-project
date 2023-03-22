import React from 'react'
import { Product } from './product'
import { useFetch } from '../../useFetch'

export const Shop = () => {

  const {products} = useFetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")

  return (
    <div className="shop">
       <div className='shopTitle'>
        <h1> Little Queer Shop</h1>
        </div> 
        <div className='products'>
          { products.map(product =>( <Product data={product} key={product.id}/>)) }
        </div>
    </div>
  )
}
