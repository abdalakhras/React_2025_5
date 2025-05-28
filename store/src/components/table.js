import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { colors } from '@mui/material';



function createData(id,name, calories, fat, carbs, protein) {
  return {id, name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   // createData('Cupcake', 305, 3.7, 67, 4.3),
//   // createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

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


export default function DenseTable() {

  const [open, setOpen] = React.useState(false);
    const handleOpen = (row) => {
      setOpen(true)
      setUpdatedDessert(row.name)
      setUpdatedCalories(row.calories)
      setUpdatedFat(row.fat)
      setUpdatedCarbs(row.carbs)
      setUpdatedProtein(row.protein)
      setUpdatedId(row.id)

    };
    const handleClose = () => setOpen(false);

  const[name,setDeseret]=useState('')
  const[calories,setCalories]=useState()
  const[fat,setFat]=useState()
  const[carbs,setCarbs]=useState()
  const[protein,setProtein]=useState()
  const[rows,setRows]=useState([createData(0,'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(1,'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(2,'Eclair', 262, 16.0, 24, 6.0)])

  const[updatedDessert,setUpdatedDessert]=useState('')
  const[updatedCalories,setUpdatedCalories]=useState()
  const[updatedFat,setUpdatedFat]=useState()
  const[updatedCarbs,setUpdatedCarbs]=useState()
  const[updatedProtein,setUpdatedProtein]=useState()
  const[updatedId,setUpdatedId]=useState(0)

  
  return (
    <>
    <br/>
    <form onSubmit={(e)=>{
      e.preventDefault()
      setRows([...rows,createData(rows.length,name, calories, fat, carbs, protein)])

    }}>
      <input type='text' placeholder='Dessert (100g serving)' onChange={(e)=>{setDeseret(e.target.value)}} value={name}></input>
      <input type='number' placeholder='Calories'  onChange={(e)=>{setCalories(e.target.value)}} value={calories}></input>
       <input type='number' placeholder='Fat (g)'  onChange={(e)=>{setFat(e.target.value)}} value={fat}></input>
        <input type='number' placeholder='Carbs (g)'  onChange={(e)=>{setCarbs(e.target.value)}} value={carbs}></input>
         <input type='number' placeholder='Protein (g)'  onChange={(e)=>{setProtein(e.target.value)}} value={protein}></input>
      <Button type='submit'>add</Button>
    </form>
    <br/>
    <hr/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
             <TableCell  align="right"><button onClick={()=>{
              var wantToDelete = window.confirm('want to delete row ?')
              console.log(wantToDelete)
              if(wantToDelete){
                const newRow = rows.filter((item)=>{
                  return item.id !== row.id
                });
                 console.log(newRow)
                 setRows(newRow)
              }
             }}>delete</button></TableCell> 
              <button onClick={()=>{
                handleOpen(row)  

              }}>update</button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* this is a modal for updating info */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            my form and input
          </Typography>
          <form onSubmit={(e)=>{
            e.preventDefault()
            handleClose()
            const updatedRow = rows.map((itm)=>{
              if(itm.id===updatedId){
                 console.log(itm)
                return createData(updatedId,updatedDessert,updatedCalories,updatedFat,updatedCarbs,updatedProtein)
              }
              console.log(itm)
              return itm;
            })
            console.log(updatedRow)
            console.log(`updated id is :${updatedId}`)
            
            setRows(updatedRow)
          }
          }>
            <input  type = 'text' placeholder='Dessert (100g serving)'  onChange={(e)=>{setUpdatedDessert(e.target.value)}} value={updatedDessert}/>
             <input  type ='number' placeholder='Calories	'  onChange={(e)=>{setUpdatedCalories(e.target.value)}} value={updatedCalories}/>
              <input  type ='number' placeholder='Fat (g)	'  onChange={(e)=>{setUpdatedFat(e.target.value)}} value={updatedFat}/>
               <input  type ='number' placeholder='Carbs (g)	'  onChange={(e)=>{setUpdatedCarbs(e.target.value)}} value={updatedCarbs}/>
                <input  type ='number' placeholder='Protein (g)	' onChange={(e)=>{setUpdatedProtein(e.target.value)}} value={updatedProtein}/>
                <p> updated id is : {updatedId}</p>
             <Button type='submit'>submit</Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}
