import '../style/home.css'
import react from 'react'
import { useState } from 'react';
function Home (){

const [number , setNumber] = useState(0)
const handlePlus = ()=>{
    setNumber(number + 1)
}
const handleMinus = ()=>{
    setNumber(number - 1)
}

    return (
     <div>
        <h1>home</h1>
        <p className ={"Ptag"}>welcome to the home page</p>
        <p>current number : {number}</p>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
     </div>
    )
}

export default Home;