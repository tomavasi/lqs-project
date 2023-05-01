import React from 'react'
import { Product } from './product'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'


export const Shop = () => {

  const {products} = useContext(ShopContext)


  return (
    <div className="shop">
       <div className='shopTitle'>
        <h1> Products</h1>
        </div>
        <div className='products'>
          { products.map(product =>( <div className="product"><Product data={product} key={product.id}/></div>)) }
        </div>
    </div>
  )
}
