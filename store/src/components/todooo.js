import { useState,useReducer } from "react";    
import { Button } from "@mui/material";

const initialstate = []

function Reducer(state,action){
switch(action.type){
    case "add":
        return [...state,{id:Date.now(),text:action.text,completed:false}]
        case 'toggle':
            return state.map(todo=> todo.id===action.id ? {...todo,completed:!todo.completed}:todo)
            case 'delete' : 
            return
            default:
                return state;
}
}

export default function ToDo(){

    const[todos,dispatch]=useReducer(Reducer,initialstate)
    const[input,setInput]=useState('')
    const handleAdd=()=>{
        dispatch({type:'add',text:input})
        setInput('')
    }
    return (
        <div>
            <input onChange={(e)=>{setInput(e.target.value)}} type="text" value={input}></input>
            <button onClick={handleAdd}>add to do</button>
<ul>
        {todos.map(todo=>(
            <li>
                <div key={todo.id}>
                    <p>to do id {todo.id}, to do text : {todo.text}, to do completed : {todo.completed}</p>
                    <Button onClick={()=>{dispatch({type:'toggle',id:todo.id})}}> {todo.completed ?'yes' : 'no'}</Button>

                </div>
            </li>
        ))}




</ul>
        </div>
    )
}
