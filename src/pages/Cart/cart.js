import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item';



export const Cart = () => {

  const { cartItems, getQuantity, getCurrentProducts, getTotalCost } = useContext(ShopContext);

  
  const currentCartProducts = cartItems.map(cartItem => getCurrentProducts(cartItem.id))
 
    return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
      { currentCartProducts.map(currentCartProduct =>( cartItems.length !== 0 && <CartItem amount={getQuantity(currentCartProduct?.id)} data={currentCartProduct} key={currentCartProduct?.id}/>)) }
      </div>
      <div>
        Total Cost = {getTotalCost().toFixed(2)}
      </div>
    </div>
  )
}
