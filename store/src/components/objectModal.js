import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { colors } from '@mui/material';

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

const style2 = {
  margin: '50px auto',
  width: '400px',
  backGroundColor: 'red',
  color : 'blue',
}

export default function ObjectasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name,setName] =React.useState('hi')
  const [age,setAge] = React.useState(0)

  const objectUser = [
    { age1 : age , name1 : name,}
  ];

  const [listOfNames,setListOfNames] = React.useState([])
   
  console.log(listOfNames)

  return (
    <>
    <div>
      <Button onClick={handleOpen}>Open object modal</Button>
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
            setListOfNames([...listOfNames,objectUser])
          }
          }>
            <input  onChange={(e)=>{setName(e.target.value)}}  type = 'text' placeholder='enter your name'/>
             <input  onChange={(e)=>{setAge(e.target.value)}} type ='number' placeholder='enter your age'/>
             <Button type='submit'>submit</Button>
          </form>
        </Box>
      </Modal>
    </div>

      <div>
      {listOfNames.map((user,index)=>(
        <div> 
        <p style= {style2} key = {index}>name and age is : {user}</p>
        </div>
      )
      )}
    </div>
      

    </>
  );
}