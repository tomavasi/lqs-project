
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Shop } from './pages/Shop/shop';
import { Cart } from './pages/Cart/cart';
import { ShopContextProvider } from './context/shop-context';

export default function App() {


  return (
    <div className="App">
      <ShopContextProvider >
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );

 };
 