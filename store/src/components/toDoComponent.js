import * as React from 'react';
import { useReducer } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';





var initialstate = {text :"hi" , id:0 , completed: false}

function Reducer(state,action){
switch(action.type){
    case 'add':
        console.log(action)
        return{...state, text: action.payload, id: action.iD, completed: action.comp}
        case 'delete':
            console.log(action)
            return{...state,text:action.payload}
            case 'toggle':
                console.log(state)
                return {...state,completed:action.comp}
      
}
  
}



export default function ToDoComponent() {


  
var[state,dispatch]=useReducer(Reducer,initialstate)
   
var [updatedState,setUpdatedState]=React.useState('')

const [iD,setID]=React.useState(0)
const handleId =()=>setID(iD + 1)



const [completed,setCompleted]=React.useState(false)
const handleCompleted=()=>{
    if(iD %2 !==0){
        setCompleted(true)
    }else{
        setCompleted(false)
    }
}



  return (
    <>    

<input onChange={(e)=>{setUpdatedState(e.target.value)}}></input>
    <Button onClick={()=>{
        dispatch({type:'add',payload:updatedState,id:iD ,comp:completed})
        handleId()
        handleCompleted()
        }}>add</Button>    

     <Button onClick={()=>{dispatch({type:'toggle'}) }}>toggle</Button> 

    <Button onClick={()=>{dispatch({type:'delete',payload:""})}}>delete</Button> 
    <hr/>
     <p>{state.text}</p>
     <hr/>
     <p>{state.text}</p>
     <hr/>
     <p></p>
    </>
    
  );
  

}