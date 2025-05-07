import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Division from './components/division';
import Summation from './components/summation';
import Title from './components/Title';
import Button from './components/Button';
import ToDolist from './components/ToDolist';
import Input from './components/Input';
import { useState } from 'react';

import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Greetings from './components/greetings';
import Footer from './components/footer';
function App() {
  
  
  return (
 
 <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/greetings' element={<Greetings/>}/>
  </Routes>


  <Footer/>
 </BrowserRouter>
 
  
 
 

  );
}

export default App;
