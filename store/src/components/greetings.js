import ObjectasicModal from "./objectModal"
import PrimarySearchAppBar from "./appbar"
import { useReducer } from "react"
// this is an Arrow function ,,, the same as the one above

const initialstate = {count:0}

function reducer (state,action){
    switch(action.type){
        case "increment":
            console.log(state)
        return {count:state.count + 1}
          case "decrement":
        return {count:state.count - 1}
          case "reset":
        return initialstate

        default:
            throw new Error()
    }
}

const greetingStyle = {
    color : "red",
    // fontSize : "40px",
    width : '200px',
    border : "5px solid green",
}
const Greetings = (prop)=>{

    const[state,dispatch]=useReducer(reducer,initialstate)

    return(
        <>
        <div>
            <h1>count : {state.count}</h1>
            <button onClick={()=>{dispatch({type:"increment"})}}>+</button>
             <button onClick={()=>{dispatch({type:"decrement"})}}>-</button>
              <button onClick={()=>{dispatch({type:"reset"})}}>reset</button>
        </div>
        <PrimarySearchAppBar/>
        <p style={greetingStyle}>welcome {prop.name} {prop.age}</p>

        <ObjectasicModal/>
        </>
    )

}
export default Greetings