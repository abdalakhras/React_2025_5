import * as React from 'react';
import { useReducer } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';





var initialstate = [{text:'hi',id:-1,completed:false}]

function Reducer(currentState,action){
switch(action.type){
    case 'add':
        console.log(currentState)
         return [...currentState,{text:action.text,id:action.id,completed:false}]

        case 'delete':
            console.log("Before:", currentState);
            console.log("Removing ID:", action.id);

            const newCurrentState =currentState.filter((t)=>{
                console.log("Comparing", t.id, "!==", action.id)
                return t.id !== action.id
            })
            console.log("After:", newCurrentState);
            return newCurrentState;

            case 'toggle':

               const toggledcomplete = currentState.map((td)=>{
                    if(td.id == action.id){
                    return {...td,completed:!td.completed}
                }else{
                    return td;
                }
               })
                return toggledcomplete
      
}
  
}



export default function ToDoComponent() {


  
var[updatedState,dispatch]=useReducer(Reducer,initialstate)
   
var [updatedInput,setUpdatedInput]=React.useState('')

const [iD,setID]=React.useState(0)
const handleId =()=>setID(iD + 1)





  return (
    <>    

<input onChange={(e)=>{setUpdatedInput(e.target.value)}}></input>
    <Button onClick={()=>{
        dispatch({type:'add',text:updatedInput,id:iD})
        handleId()
        console.log(updatedState)
        }}>add</Button>    

        <ul>
            {updatedState.map(todo=>(
                <div key={todo.id}>
                    <p>todo Text :{todo.text}, todo Id : {todo.id}, todo completed: {todo.completed ?'yes':'no'}

                        <Button color='error' onClick={()=>{
                            dispatch({type:'delete',id:todo.id})
    
                            }}>delete</Button> 

                        <Button color='success' onClick={()=>{
                            dispatch({type:'toggle',id:todo.id})
                        }}>toggle</Button>
                        </p>
                    
                    
                </div>
            ))}
        </ul>
    <hr/>
     
    
    </>
    
  );
  

}