import React from "react"
import { useState } from "react"

const Summation = (prop)=>{

    const [number1 , setNumber] = useState()
    const handleNumber1 = (event)=>{
    setNumber(event.target.value) // what returns from this value is always a string because it's from HTML input
    console.log(number1)          // number1 is a string  
    }

    const [number2, setNumber2 ] = useState()
    const handleNumber2 = (event)=>{
        setNumber2 (event.target.value) // what returns from this value is always a string because it's from HTML input
                                        // number2 is a string 
        console.log(number2)
    }

    const [total , setTotal ] = useState(0)
    const calTotal = ()=>{
        setTotal(Number (number1) + Number (number2) ) // we use Number , because what returns from HTML input is always string
    }

    const [name1 , setName ] = useState('')
    const handleName = (event)=>{
        setName (event.target.value)
        console.log(name1)
    }
    return(
        <>
        
        <h3>Hello from {prop.name} {prop.age}</h3>

        <input onChange={handleNumber1} type='number' placeholder='enter any number' ></input>
        <button onClick={calTotal}>+</button>
        <input onChange={handleNumber2} type='number' placeholder='enter any number' ></input>
        <p>result = {total} </p>
        <br/>
        <input onChange={handleName} type='text' placeholder='enter any text'/>
        <p> the name is : {name1}</p>
       
        
        </>
    )
}
export default Summation