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

function App() {
  
  
  return (
 
 <BrowserRouter>
  <ResponsiveAppBar/>
  {/* <UserMenuDemo/> */}
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/greetings' element={<Greetings/>}/>
    <Route path='/newComponent' element={<NewComponent/>}/>
  </Routes>

  
  <SimpleBottomNavigation/>
  <MediaCard/>
  <Footer/>
 </BrowserRouter>
 
  
 
 

  );
}

export default App;
