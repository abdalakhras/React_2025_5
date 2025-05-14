import '../style/home.css'
import react from 'react'
import { useState } from 'react';
import Summation from './summation';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Home (){

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const[name, setName] = useState('')
  const handleName = (event)=>{
    setName(event.target.value)
  }

  const[number,setNumber] = useState(0)
  const handelNumber =(e)=>{
    setNumber(e.target.value)
  }

  const[age,setAge] = useState(0)
  const handleAge =()=>{
    setAge(number)
  }

  const[userName,setUserName] = useState('')
  const handleUserName = ()=>{
    setUserName(name)
  }


// const [number , setNumber] = useState(0)
// const handlePlus = ()=>{
//     setNumber(number + 1)
// }
// const handleMinus = ()=>{
//     setNumber(number - 1)
// }

    return (
        <>
    {/* //  <div>
    //     <h1>home</h1>
    //     <p className ={"Ptag"}>welcome to the home page</p>
    //     <p>current number : {number}</p>
    //     <button onClick={handlePlus}>+</button>
    //     <button onClick={handleMinus}>-</button>
    //     <br/>
    //  </div>
     */}
<div>
    <h1>welcome</h1>
    <p>your name is : {userName}</p>
    <p>your age is : {age}</p>
</div>
 <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input onChange={handleName} type = 'text' placeholder='enter your name'/>
          <input onChange = {handelNumber} type ='number' placeholder='enter your age'/>
          <button onClick={()=>{
            handleAge()
            handleUserName()
          }}>submit</button>
        </Box>
      </Modal>
    </div>
        </>
    )
}

export default Home;