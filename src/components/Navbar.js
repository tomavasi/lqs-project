import React, { useRef } from 'react'
import {Link} from "react-router-dom"
import { ShoppingCart, User } from 'phosphor-react'
import '../components/Navbar.css'



export default function Navbar({setLoginModal,setSignUpModal}) {


  return (
    <div  className='navbar'>
        <div className="navbar-logo">
        <Link to="/">LQS</Link>
        </div>
        <div className="navbar-links">
            <Link to="/shop"> Shop </Link>
            <Link to="/cart"> <ShoppingCart size= {32} /></Link>
        </div>
        <button className='signupbtn' onClick={()=>setSignUpModal(true)}>Sign up</button>
        <button className='loginbtn' onClick={()=>setLoginModal(true)}>Login</button>

    </div>
  )
}
