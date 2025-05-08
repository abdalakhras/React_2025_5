// these functioons where removed from app()
import React from 'react';
import Home from './home'
import Nav from './nav'
import Division from './division'
import Summation from './summation';
import Title from './Title'
import Button from './Button';
import ToDolist from './ToDolist';
import Input from './Input';
import { useState } from 'react';



export default function NewComponent (){

  
  const [inputValue , setInputValue] = useState('')
  const [todos , setTodos] = useState([])
  const handleToDos = ()=>{
    setTodos(inputValue)

  }
  return(

    <>

    <h1>Hi this is our first react app</h1>
    <Division/>
  
   <Summation name ='Abed' age ='30'/>
   <br/>
   <br/>
   <Title text='this is ract to do '/>
   <Input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
   <Button text='add to do' onClick={handleToDos}/>
   <ToDolist todos = {todos}/>
    
    
    </>
  )
}