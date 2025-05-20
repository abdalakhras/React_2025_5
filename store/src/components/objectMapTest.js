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







export default function MediaCard() {

    const userObject = [
    {id : 1 , title : "card1" , discription : "nthn"},
    {id : 2 , title : "card2" , discription : "nthn"},
    {id : 3 , title : "card3" , discription : "nthn"},
]

console.log(userObject)

console.log(typeof[userObject])
   

  return (
    <>
    
    <br/>
 {userObject.map((card,index)=>(

            <div >
    <h1>hi</h1>
<Button color='success'>{card.title}</Button>


        </div>
        

    ))}

    </>
    
  );
  

}
