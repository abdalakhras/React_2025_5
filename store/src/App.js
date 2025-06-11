import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Nav from './components/nav';

import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Greetings from './components/greetings';


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
import ThemeContext from './components/theme';
import ToDoComponent from './components/toDoComponent';
import ToDo from './components/todooo';
import Footer from './components/footer';

function App() {
  
  // const sharedValue = 'hello from MyContext' 
  var[sharedValue,setSharedValue]=useState('hello from my context')
  const[themeValue,setThemValue]=useState('darkTheme')
  
  return (
 <ThemeContext.Provider value={{themeValue,setThemValue}}>
<MyContext.Provider value={{sharedValue,setSharedValue}}>
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
    <Route path='/todocomponent' element={<ToDoComponent/>}></Route>
     <Route path='/todo' element={<ToDo/>}></Route>
  </Routes>

  <br/>
  <br/>
  <hr/>
  {/* <SimpleBottomNavigation/> */}
  {/* <MediaCard/> */}
  <Footer/>
 </BrowserRouter>

  </MyContext.Provider>
   

 </ThemeContext.Provider>



  );
}

export default App;
