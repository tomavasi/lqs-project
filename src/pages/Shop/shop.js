import React from 'react'
import { Product } from './product'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'


export const Shop = () => {
  const {searchResults, products} = useContext(ShopContext);
  console.log(searchResults)

  return (
    <div className="shop">
       <div className='shopTitle'>
        <h1> Products</h1>
        </div>
        <div className='products'>
          { searchResults.length !==0 ? searchResults?.map(product =>( <div className="product"><Product data={product} key={product.id}/></div>)) : products?.map(product =>( <div className="product"><Product data={product} key={product.id}/></div>)) }
        </div>
    </div>
  )
}
