import '../style/home.css'
import react from 'react'
import { useState } from 'react';
import Summation from './summation';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createData(dessert, calories, fat, carbs, protein) {
  return { dessert, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   // createData('Eclair', 262, 16.0, 24, 6.0),
//   // createData('Cupcake', 305, 3.7, 67, 4.3),
//   // createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];



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
// these useStates are for the table
const[dessert,setDessert]=useState('')
const[calories,setCalories]=useState('')
const[fat,setFat]=useState('')
const[carbs,setCarbs]=useState('')
const[protine,setProtine]=useState('')
const[rows,setRow] = useState([ createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),])

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

            {/* this is a table */}

            <form onSubmit={(e)=>{
              e.preventDefault()
              console.log(dessert)
              setRow([...rows,createData(dessert, calories, fat, carbs, protine)])
            }}>
              <input onChange={(e)=>{setDessert(e.target.value)}} type='text' placeholder='Dessert (100g serving)'/>
               <input onChange={(e)=>{setCalories(e.target.value)}}  type='text' placeholder='>Calories'/>
                <input onChange={(e)=>{setFat(e.target.value)}}  type='text' placeholder='Fat&nbsp;(g)'/>
                 <input onChange={(e)=>{setCarbs(e.target.value)}}  type='text' placeholder='Carbs&nbsp;(g)'/>
                 <input onChange={(e)=>{setProtine(e.target.value)}}  type='text' placeholder='Protein&nbsp;(g)'/>
                 <Button type='submit'>add</Button>
            </form>
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell>action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.dessert}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.dessert}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <button onClick={(e)=>{
                var wantToDelete = window.confirm('want to delete ?')
                console.log(wantToDelete)
                if(wantToDelete){
                  const newRow = rows.filter((item)=>{
                    return item.dessert !== row.dessert
                  });
                  console.log(newRow)
                  setRow(newRow)
                }
              
            
              }}>delete</button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </>
    )
}

export default Home;