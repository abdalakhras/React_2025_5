import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Division from './components/division';
import Summation from './components/summation';

function App() {
  
  return (
 <>
 <Nav/>
 <h1>Hi this is our first react app</h1>
 <Division/>
<Home/> 
<Summation name ='Abed' age ='30'/>
 
 
 
 
 
 
 </>
  );
}

export default App;
