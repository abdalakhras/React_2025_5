import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));



export default function MediaCard() {





    const[iD,setId]=React.useState(0)
    const handleID =()=>{
        setId(iD + 1)
    }

    const[Title,setTitle]=React.useState('')
   const[Discription,setDiscription]=React.useState('')

   const[listOFButtons,setListOfButtons]=React.useState([])

    const userObject = 
    {id : iD , title : Title , discription : Discription }

    
// console.log(userObject)

   

  return (
    <>

   

    <form onSubmit={(e)=>{
        e.preventDefault()
        handleID()
        setListOfButtons([...listOFButtons,userObject])
    }}>
    <input onChange={(e)=>{setTitle(e.target.value)}} type='text' placeholder='enter title'/>
    <input  onChange={(e)=>{setDiscription(e.target.value)}} type='text' placeholder='enter title'/>
    <button type='submit' >submit</button>
    </form>

    <br/>
 {listOFButtons.map((btn)=>(

            <div key={btn.id} >

   <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item><Button color='success'>{btn.title}</Button></Item>
        </Grid>
        </Grid>
        </Box>



        </div>
        

    ))}

    </>
    
  );
  

}
