import React, { useRef } from 'react'
import {Link} from "react-router-dom"
import { ShoppingCart, User } from 'phosphor-react'
import { faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../components/Navbar.css'



export default function Navbar({setLoginModal,setSignUpModal}) {


  return (
    <>
    <div  className='navbar navbar1'>
        <div className="navbar-logo">
        <Link to="/">LQS</Link>
        </div>
        <div className='btns'>
        <button className='modalsignupbtn' onClick={()=>setSignUpModal(true)}>Sign up</button>
        <button className='modalloginbtn' onClick={()=>setLoginModal(true)}><FontAwesomeIcon icon={faCircleUser}/></button>
        </div>
        <div className="navbar-cart">
            <Link to="/cart"> <FontAwesomeIcon icon={faCartShopping} /></Link>
        </div>
    </div>
    <div className='navbar navbar2'>
    <div className='navbar-links'>
    <Link to= "/">Home</Link>
    <Link to="/shop"> Shop </Link>
    <Link to= "/about-us">About Us</Link>
    </div>
    </div>
    </>
  )
}
