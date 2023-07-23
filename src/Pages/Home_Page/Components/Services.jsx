import React from 'react';
import "../Stylesheets/Services.css"
import HotelIcon from '@mui/icons-material/Hotel';
import ExploreIcon from '@mui/icons-material/Explore';
import PC from '@mui/icons-material/PersonalVideo';

const Services = () => {
    return(
        <div className="bg">
        <div className='services'>
            <div className="service-item">
                {/* end-to-end hotel booking platform*/}
                <PC fontSize="50rem"/>
                {/* text below the icon*/}
                <div className="text-div"><p className="text-p">Ascenda Loyalty is an end-to-end hotel booking platform</p></div>
            </div> 
            <div className="service-item">
                {/* best destinations*/}
                <ExploreIcon fontSize="50rem"/>
                {/* text below the icon*/}
                <div className="text-div"><p className="text-p">Connecting you with the best destinations around the world</p></div>
            </div>  
            <div className="service-item">
                {/* best hotels*/}
                <HotelIcon fontSize="50rem"/>
                {/* text below the icon*/}
                <div className="text-div"><p className="text-p">Enjoy a comfortable stay in the hotel of your choice</p></div>
            </div>   
        </div></div>
    );
};

export default Services;