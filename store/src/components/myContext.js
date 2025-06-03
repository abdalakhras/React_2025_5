import React from "react";
import { createContext } from "react";

const MyContext = createContext({
    sharedValue : "hello from my context object",
    setSharedValue : ()=>{},
})
export default MyContext;