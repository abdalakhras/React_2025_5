import React from "react";

const Input = ({value , onChange })=> (
    <input type="text" onChange={onChange} value={value}/>
)
export default Input