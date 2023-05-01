
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Shop } from './pages/Shop/shop';
import { Cart } from './pages/Cart/cart';
import { Home } from './pages/Home/home';
import { ShopContextProvider } from './context/shop-context';
import { useState, useRef } from 'react'
import LoginModal from './modals/LoginModal'
import SignupModal from './modals/SignupModal'




export default function App() {
  const [signUpModal,setSignUpModal] = useState(false);
  const [loginModal,setLoginModal] = useState(false);
  

  return (
    <div className="App">
      <ShopContextProvider >
      <Router>
      <Navbar setSignUpModal={setSignUpModal} setLoginModal={setLoginModal}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </Router>
      </ShopContextProvider>
      <LoginModal loginModal={loginModal} setSignUpModal={setSignUpModal} setLoginModal={setLoginModal}/>
      <SignupModal signUpModal={signUpModal} setSignUpModal={setSignUpModal} setLoginModal={setLoginModal}/>
    </div>
  );

 };
 