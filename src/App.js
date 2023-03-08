import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer'
import Nav from './Nav'
import {Routes, Route, RouterProvider } from 'react-router-dom';

export default function App() {
  
 

  return (
    <div className="App">
      <Header className="Header" title = "Welcome to the Little Queer Shop (..on the making)"/>
      <Routes>
      <Navbar />
        <Route path='/' exact/>
      </Routes>
      <Main className="Main"/>
      <Footer classeName="Footer"/>
    </div>
  );

 };
 