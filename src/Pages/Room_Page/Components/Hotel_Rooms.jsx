
import "../Stylesheets/Hotel_Room.css"
import { doc, updateDoc, arrayUnion, arrayRemove  } from "firebase/firestore"; 
import { db } from '../../../firebase';




import  useAuth  from "../../Profile_Page/useAuth"


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
import { Link } from "@mui/material";



import { useNavigate } from "react-router-dom";

function Hotel_Rooms(props) {
    const navigate = useNavigate();
    // const id = "1pMbIMFKQ24xAL8PLr8G"
    const id = useAuth()
    const onClickHandler = async () => {
       
        console.log(props)
        
        // const test=await setDoc(doc(db, "Users", "1pMbIMFKQ24xAL8PLr8G"), {
        //     email: "userNew@gmail.com",
        //     name: "userNew",
        //     booking:rooms+[props.r_name]
        // });
    
        await updateDoc(doc(db, "Users",id.uid), {
               bookings: arrayUnion(props.obj)
             });
        
        window.alert("Room Selected")
        navigate(`/payment/${props.obj.h_name}/${props.obj.r_name}/${props.obj.r_cost}/${props.obj.r_start_d}/${props.obj.r_end_d}/${props.obj.rooms}/${props.obj.guests}`)
        

        
        
          
    }

    const theme = useTheme();
    return (

        <Card sx={{ display: 'flex', width:"80%", }} className="room_holder">
            <Box sx={{ display: 'flex', flexDirection: 'column' ,height:"100%"}} className="room_quick_details">
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h4" data-testid="hotel-room-reserve-name">
                    {props.r_name}
                </Typography>
                    <Typography variant="h5" color="text.secondary" component="div" sx={ {paddingTop:"8%"}} data-testid="hotel-room-reserve-price">
                    {props.price} SGD/night
                </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <button  data-testid="hotel-room-reserve-click" onClick={onClickHandler}  >Select</button>
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