import React, { useRef } from 'react'
import {Link} from "react-router-dom"
import { ShoppingCart, User } from 'phosphor-react'
import { faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../components/Navbar.css'
import { useContext } from 'react'
import { ShopContext } from '../context/shop-context'
import Searchbar from './Searchbar'



export default function Navbar({setLoginModal,setSignUpModal}) {

const {cartItems} = useContext(ShopContext);


const getTotalAmount = () =>{
  let totalAmount = 0;
  cartItems.map(cartItem=>{
      totalAmount += cartItem.amount
  });
  return totalAmount
  }

  return (
    <>
    <div  className='navbar navbar1'>
        <div className="navbar-logo">
        <Link to="/">LQS</Link>
        </div>
        <div className='searchbar'>
        <Searchbar/>
        </div>
        <div className='btns'>
        <div className='modalbtns'>
        <button className='modalsignupbtn' onClick={()=>setSignUpModal(true)}>Sign up</button>
        <button className='modalloginbtn' onClick={()=>setLoginModal(true)}><FontAwesomeIcon icon={faCircleUser}/></button>
        </div>
        <div className="navbar-cart">
            <Link to="/cart"> <FontAwesomeIcon icon={faCartShopping} /></Link> {cartItems.length !== 0 && <div className='badgecontainer'><span className='badge'>{getTotalAmount()}</span></div>}
        </div>
        </div>
    </div>
    <div className='navbar navbar2'>
    <div className='navbar-links'>
    {/* <Link to= "/">Home</Link> */}
    <Link to="/shop"> Shop </Link>
    <Link to= "/about-us">About Us</Link>
    </div>
    </div>
    </>
  )
}
