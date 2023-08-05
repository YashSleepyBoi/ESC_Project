
import "../Stylesheets/Hotel_Room.css"
import { doc, updateDoc, arrayUnion, arrayRemove  } from "firebase/firestore"; 
import { db } from '../../../firebase';





import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';



function Hotel_Rooms(props) {
    const onClickHandler =async () => {
        console.log(props)
        // const test=await setDoc(doc(db, "Users", "Of73cDsD51T1JwxXXweI"), {
        //     email: "userNew@gmail.com",
        //     name: "userNew",
        //     booking:rooms+[props.r_name]
        // });
        //...
        await updateDoc(doc(db, "Users","Of73cDsD51T1JwxXXweI"), {
               booking: arrayUnion(props.r_name)
             });

        

        console.log("done")
        
        
          
    }

    const theme = useTheme();
    return (

        <Card sx={{ display: 'flex', width:"80%", }} className="room_holder">
            <Box sx={{ display: 'flex', flexDirection: 'column' ,height:"100%"}} className="room_quick_details">
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h3">
                    {props.r_name}
                </Typography>
                    <Typography variant="h5" color="text.secondary" component="div" sx={ {paddingTop:"20%"}}>
                    {props.price}
                </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <button onClick={onClickHandler}>Select</button>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: "30%",height:"100%" }}
                image={props.img}
                alt="Live from space album cover"
            />
        </Card>
        

    )
}

export default Hotel_Rooms