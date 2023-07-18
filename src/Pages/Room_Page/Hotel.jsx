
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
import Footer from "./Components/footer"
import { useEffect } from 'react';
import HotelRating from './Components/HotelsRating';
import Suite from './Components/suite';
import NavBar from "./Components/RoomNavBar";

function Room() {
    const hotel_name="SHERATON KAGOSHIMA"
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
    }
    

    const temp_data = [
        { id:0, room: "Deluxe Room", image: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" },
        { id:1,room: "Deluxe Kind", image: "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2674&q=80" },
        { id: 2, room: "Deluxe Room", image: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" },
        { id:0, room: "Deluxe Room", image: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" },
        { id:1,room: "Deluxe Kind", image: "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2674&q=80" },
        { id:2,room: "Deluxe Room", image: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" },
        
    ]

    
    useEffect(() => {
        console.log("Check 1")
        fetch("https://hotelapi.loyalty.dev/api/hotels/diH7")
            .then(response => { return response.json() })
            .then(data => { console.log(data) })
       
    }, []);

    
    return (
        <>
            {/* TODO 1.1 : FIX THE ROUTER USING A PROPER REACT ROUTER */}
            <Router>
        <NavBar />

        <Routes>
          {/* <Route path='/' exact component={Home} />  */}
          <Route path="/findreserve" component={FindReserve} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/rewards" component={Rewards} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </Router>
            {/* TODO 1.2 : FIX THE BUTTONS :: DONE*/}
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={55}
                totalSlides={2}
                isPlaying={true}
                interval={10000}
                infinite={true}
                lockOnWindowScroll={true}
                
            >
                <Slider>
                    <Slide index={0}>
                        <img src='https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'></img>
                    </Slide>
                    
                    <Slide index={1}>
                        <img src='https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'></img>
                    </Slide>
                </Slider>
                

                    
                        
                    <div id="arrow_2" class="arrow-wrapper" >
                        <div class="arrow arrow--left">
                            
                            <ButtonBack >BACK</ButtonBack>
                            </div>

                            

                            <div class="arrow arrow--right">
                                
                                 <ButtonNext>NEXT</ButtonNext>
                        
                            </div>
                    </div>
                 
                    
                    
                    
              
                
            </CarouselProvider>

            {/* TODO 1.3 : HOTEL DESCRIPTION */}

            <div className='hotel_descript'>
            <h3>WELCOME TO SHERATON KAGOSHIMA</h3>

            <p>All 228 spacious guest rooms offer spectacular views of Sakurajima and Kagoshima city. For guests staying in Club Rooms and Suites located on the upper floors, the Club Lounge offers an at-home atmosphere<span id="dots">...<button onClick={myFunction} id="myBtn">See More</button></span><span id="more">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>
            </div>


            {/* TODO 1.4 : ROOMS AND SUITS SLIDER */}
            <div style={{ background: "#fbfbfb" }} className="rooms">
            <Card_Slider data={temp_data}></Card_Slider>
            </div>

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={40}
                totalSlides={4}
                isPlaying={true}
                interval={6000}
                infinite={true}
                lockOnWindowScroll={true}
                
            >
                <Slider >
                    <Slide index={0}>
                    <div className='holder view_holder'>
                    <HotelRating name="Lake House"></HotelRating>
           </div>
                   
                    </Slide>
                    
                    <Slide index={1}>
                    <div className='holder view_holder'>
                    <HotelRating name="home"></HotelRating>
           </div>
                        </Slide>
                        <Slide index={2}>
                        <div className='holder view_holder'>
                    <HotelRating name="Buisness House"></HotelRating>
           </div>
                    </Slide>

                    <Slide index={3}>
                    <div className='holder view_holder'>
                    <HotelRating name="Lake House 2"></HotelRating>
           </div>
                    </Slide>

                </Slider>
                

                    
                        
                    <div id="arrow_2" class="arrow-wrapper"  >
                        <div class="arrow arrow--left" >
                            
                            <ButtonBack >BACK</ButtonBack>
                            </div>

                            

                            <div class="arrow arrow--right">
                                
                                 <ButtonNext>NEXT</ButtonNext>
                        
                            </div>
                    </div>
                 
                    
                    
                    
              
                
            </CarouselProvider>
               
            
            <Suite></Suite>
            

            {/* TODO 1.5 AMMENITIES */}
            <div className='holder'>
            <h1 className='text-left  pt-10 font-bold text-2xl mb-8 '>Ammenities</h1>
            <Ammenities h_name={hotel_name}></Ammenities>
            </div>
           
            {/* TODO 1.8 HOTEL INFORMATION */}
            <div className='holder'>
            <h1 className='text-left  pt-10 font-bold text-2xl mb-8 '>Hotel Information</h1>
            <H_Information h_name={hotel_name}></H_Information>
            </div>
            
            {/* TODO 2.0: MAP  */}
            <Map></Map>

            

            <Footer />
        </>
        
    )
}

export default Room