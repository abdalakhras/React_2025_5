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
function App() {
  
  const [inputValue , setInputValue] = useState('')
  const [todos , setTodos] = useState('')
  const handleToDos = ()=>{
    setTodos(inputValue)
  } 
  
  
  return (
 <>
 <Nav/>
 <h1>Hi this is our first react app</h1>
 <Division/>
<Home/> 
<Summation name ='Abed' age ='30'/>
<br/>
<br/>
<Title text='this is ract to do '/>
<Input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
<Button text='add to do' onClick={handleToDos}/>
<ToDolist todo={todos}/>
 
 
 
 
 
 
 </>
  );
}

export default App;
