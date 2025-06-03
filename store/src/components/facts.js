import React, { useState } from "react";
import { useEffect } from "react";
import MyContext from "./myContext";
import { useContext } from "react";

export default function Facts (){

   const{sharedValue,setSharedValue}=useContext(MyContext)

const[facts,setFacts]=useState([])

useEffect(()=>{
console.log('i am in useeffect')

const fetchFacts = async ()=>{

    try{
        const respons = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random').then((res)=>res.json());
        console.log(respons)
        setFacts(respons)

    }catch(error){
        console.log('error fetching facts', error)
    }
}

fetchFacts()

},[]) 

    return(
        <>
        <input type="text" placeholder="change sharedvalue" onChange={(e)=>{setSharedValue(e.target.value)}}></input>
        <h1>{sharedValue}</h1>
        <br/>
        <h1>Facts</h1>
        <p className="factsColor">
            {facts ? facts.text : 'Loading...'}
        </p>
        
        </>
    )
}