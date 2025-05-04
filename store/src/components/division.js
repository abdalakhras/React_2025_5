import "../style/division.css"
import Greetings from "./greetings"
import react from "react"

export default function Division(){
    
    const [name , setName] = react.useState('')
    const handleName = (event)=>{
        setName(event.target.value)
    }
    
    return(
        
        <div className = {"divStyle"}>
            <h3 className={"Hstyle"}>some random text made for styling</h3>
            <Greetings name={name} age="19"/>
            <input onChange={(event)=>{handleName(event)}} type="text" placeholder=""></input>
        </div>
    

    )
}
