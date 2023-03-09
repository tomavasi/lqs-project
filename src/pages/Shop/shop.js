import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from './product'

export const Shop = () => {

   const [products, setProducts] = useState([]);

    useEffect(

        function apiData () {
            axios
            .get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
            .then(response =>{
                setProducts(response.data);
                });
            
            },[]);

  

  return (
    <div className="shop">
       <div className='shopTitle'>
        <h1> Little Queer Shop</h1>
        </div> 
        <div className='products'>
          { products.map(product =>( <Product data={product} />)) }
        </div>
    </div>
  )
}
