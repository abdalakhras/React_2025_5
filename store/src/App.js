import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Nav from './components/nav';

import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Greetings from './components/greetings';
import Footer from './components/footer';

import NewComponent from './components/newComponent';

import ResponsiveAppBar from './components/responsivebar';
import SimpleBottomNavigation from './components/bottomNavigation';
import RecipeReviewCard from './components/recipeCard';
import UserMenuDemo from './components/testComponent';
import MediaCard from './components/objectMapTest';
import DenseTable from './components/table';
import Facts from './components/facts';
import MyContext from './components/myContext';
import { useState } from 'react';
function App() {
  
  // const sharedValue = 'hello from MyContext' 
  var[sharedValue,setSharedValue]=useState('hello from MyContext')
  
  return (
 <MyContext.Provider value={sharedValue}>

 <BrowserRouter>
  <ResponsiveAppBar/>
  {/* <UserMenuDemo/> */}
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/greetings' element={<Greetings/>}/>
    <Route path='/newComponent' element={<NewComponent/>}/>
    <Route path='/table' element={<DenseTable/>}/>
    <Route path='/objectMapTest' element={<MediaCard/>}></Route>
    <Route path='/facts' element={<Facts/>}></Route>
  </Routes>

  <br/>
  <br/>
  <hr/>
  {/* <SimpleBottomNavigation/> */}
  {/* <MediaCard/> */}
  <Footer/>
 </BrowserRouter>
 
   <input type="text" placeholder='change MyContext shareValue' onChange={(e)=>{setSharedValue(e.target.value)}}></input>

 </MyContext.Provider>



  );
}

export default App;
