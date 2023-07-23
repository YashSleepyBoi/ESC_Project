


// Import Statements
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar1';
import FindReserve from '../../components/pages/findreserve';
import Rewards from '../../components/pages/rewards';
import Hotels from '../../components/pages/hotels';
import Contact from '../../components/pages/contact';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import classes from "./Stylesheets/Room.module.css"

import "./Stylesheets/Room.css"
import Card_Slider from './Components/Card_Slider';
import Ammenities from './Components/Ammenities';
import H_Information from './Components/H_Information';
import Map from './Components/Map';

import { useEffect } from 'react';
import Banner from './Components/Banner';
import Panel from "./Components/Panels"
import 'react-datepicker/dist/react-datepicker.css'


function Room_Reserve() {
    

    return (
        
        <>
           
         {/* TODO 1.9 : FIX THE ROUTER USING A PROPER REACT ROUTER */}
          
        
            <Banner></Banner>
            <Panel></Panel>
  



     
        
        
        </>
    )
}

export default Room_Reserve