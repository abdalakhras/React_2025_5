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

  const[listOfNames , setListOfNames] = useState([])
  const[listOfAges , setListOfAges] = useState([])

//   functions added by me
  const[name, setName] = useState('')
  const handleName = (event)=>{
    setName(event.target.value)
  }

  const[number,setNumber] = useState(0)
  const handelNumber =(e)=>{
    setNumber(e.target.value)
  }
// if you wanna call this function by onClick , just change the variable name in p-tage
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
    {/* <p>your name is : {name}</p> */}
    {/* <p>your age is : {number}</p> */}

    {listOfNames.map((name, index)=>(
        <div key = {index}> 
        <h2>name number {index + 1} : {name}</h2>
        <p>{listOfAges[index]}</p>
        </div>
    )

    )}

</div>
 <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* changes added by me */}
        <Box sx={style}>
            <form onSubmit={(e)=>{
                e.preventDefault();
                handleClose();
                setListOfNames([...listOfNames,name])
                setListOfAges([...listOfAges,number])
            }}>
          <input onChange={handleName} type = 'text' placeholder='enter your name'/>
          <input onChange = {handelNumber} type ='number' placeholder='enter your age'/>
          <button  type='submit'>submit</button>
          </form>
        </Box>
      </Modal>
    </div>
        </>
    )
}

export default Home;