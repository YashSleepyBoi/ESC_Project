import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function ActionAreaCard(props) {
  const cost="1234"
  const roomClickHandler = () => {
    // TODO 1.6: LINK TO ROOM PAGE
    console.log(props.name)
  }
  
  return (
    <Card sx={{ width: 590, maxHeight: 480, margin: 10, display: 'inline-block' }} onClick={roomClickHandler} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="0"
          image={props.image}
          alt="green iguana"
          sx={{height:"100%"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='text-left text-lg font-normal'>
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary"  className='text-left text-lg font-normal'>
            {props.cost+" S$ per night"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}