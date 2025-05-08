import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Nav from './components/nav';

import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Greetings from './components/greetings';
import Footer from './components/footer';

import NewComponent from './components/newComponent';

function App() {
  
  
  return (
 
 <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/greetings' element={<Greetings/>}/>
    <Route path='/newComponent' element={<NewComponent/>}/>
  </Routes>

  <Footer/>
 </BrowserRouter>
 
  
 
 

  );
}

export default App;
