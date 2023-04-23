import React from 'react'
import { Product } from './product'
import { useFetch } from '../../useFetch'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'


export const Shop = () => {
  
  const {products} = useContext(ShopContext)


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
