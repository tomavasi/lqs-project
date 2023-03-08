
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  
 

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/cart" />
      </Routes>
      </Router>
    </div>
  );

 };
 