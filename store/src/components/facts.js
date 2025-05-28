import React, { useState } from "react";
import { useEffect } from "react";
import MyContext from "./myContext";
import { useContext } from "react";

export default function Facts (){

    const contextValue = useContext(MyContext)

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
        <h1>{contextValue}</h1>
        <br/>
        <h1>Facts</h1>
        <p>
            {facts ? facts.text : 'Loading...'}
        </p>
        </>
    )
}