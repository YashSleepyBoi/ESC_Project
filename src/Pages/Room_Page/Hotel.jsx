// Import Statements
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar1';
import FindReserve from '../../components/pages/findreserve';
import Rewards from '../../components/pages/rewards';
import Hotels from '../../components/pages/hotels';
import Contact from '../../components/pages/contact';
import { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { convert } from 'html-to-text';
import Footer from "./Components/RoomFooter";
import classes from "./Stylesheets/Room.module.css"
 
import "./Stylesheets/Room.css"
import Card_Slider from './Components/Card_Slider';
import Ammenities from './Components/Ammenities';
import H_Information from './Components/H_Information';
import Map from './Components/Map';
 
import { useEffect } from 'react';
import HotelRating from './Components/HotelsRating';
import Suite from './Components/suite';
import NavBar from "./Components/RoomNavBar";
import { useParams } from 'react-router-dom';
 

// get parameters: hotel id/start/end
function getParams() {
    const { hotel_id, start_date, end_date } = useParams();
    const params = [hotel_id, start_date, end_date];
    return params;
}
 
function Room({setBottom}) {

    const [hotel_dets, sethotel_dets] = useState({});
    const [room_dets, setroom_dets] = useState({});
    const hotel_name = "SHERATON KAGOSHIMA"
 
    // Hotel ID, Check in and Check out values
    // const host="diH7"
    const host ="diH7";
    const startDate = getParams()[1];
    const endDate = getParams()[2];
    setBottom(false);
   
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
    
 
    // console.log("Clothing Iron:", hotel_dets["amenities"]["clothingIron"]);
    // console.log("Dry Cleaning:", hotel_dets["amenities"]["dryCleaning"]);
 
    const temp_data = [
        { id:0, room: "Deluxe Room", image: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" },
        { id:1,room: "Deluxe Kind", image: "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2674&q=80" },
        { id: 2, room: "Deluxe Room", image: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" },
        { id:0, room: "Deluxe Room", image: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" },
        { id:1,room: "Deluxe Kind", image: "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2674&q=80" },
        { id:2,room: "Deluxe Room", image: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixiod=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" },
        
    ]
 
    
    
  function getHotels() {
    // needs access control
    return fetch(`http://localhost:8000/hotel/${host}`)
        .then(data =>
          
            data.json()
            
        )
  }
    
    
  function getRooms() {
    // needs access control
    return fetch(`http://localhost:8000/rooms/${host}`)
        .then(data =>
          
            data.json()
        )
  }
 
    
  useEffect(() => {
      getHotels().then(hotels => {
          
          const { name, amenities,amenities_ratings, categories, description,address,original_metadata , image_details,hires_image_index} = hotels
          let arr = []
          let arr2=[]
          for (const key in amenities) {
 
              arr.push(key)
          }
          let arr4=[]
          for (const key in categories) {
                arr4.push(categories[key])
          }
          let arr3 = []
          const prefix = image_details.prefix
          const suffix= image_details.suffix
          for (let i = 0; i < 10; i++){
              const strng = `${prefix + i.toString() + suffix}`
              
            arr3.push(`${prefix+i.toString()+suffix}`)
          }
          
          sethotel_dets({ name, arr, categories, description ,amenities_ratings,address, original_metadata,image_details,arr3,arr4})
          
      })
      
  }, [])
    
    
    
    useEffect(() => {
        getRooms().then(roomz => {
            const { rooms } = roomz
            let arr = []
            let arr2 = []
            let arr3=[]
            rooms.map(item => {``
                arr.push(item.roomDescription)
                arr2.push(item.coverted_max_cash_payment)
                arr3.push(item.images[0].url)
            })
          
            setroom_dets({arr,arr2,arr3})
        })
    },[])
  
 
    
  
  
    
    return (
        <div data-testid="hotel_main">
            {/* TODO 1.1 : FIX THE ROUTER USING A PROPER REACT ROUTER */}
            
            {/* TODO 1.2 : FIX THE BUTTONS :: DONE*/}
 
            {hotel_dets.arr3 ?<CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={55}
                totalSlides={10}
                isPlaying={true}
                interval={10000}
                infinite={true}
                lockOnWindowScroll={true}
                
            >
                <Slider>
 
                    {hotel_dets.arr3.map((item, index) => {
                        return(
                            <Slide index={index}>
                            <img src={item} alt="Description when image is not found" style={{ width: "100%"}}></img>
                        </Slide>
                        )
                    })}
                    
                    
                    
                   
                </Slider>
                
 
                    
                        
                    <div id="arrow_2" class="arrow-wrapper-2" >
                        <div class="arrow arrow--left">
                            
                            <ButtonBack >BACK</ButtonBack>
                            </div>
 
                            
 
                            <div class="arrow arrow--right">
                                
                                 <ButtonNext>NEXT</ButtonNext>
                        
                            </div>
                    </div>
                 
                    
                    
                    
              
                
            </CarouselProvider>:<></>
                
            }
            
 
            {/* TODO 1.3 : HOTEL DESCRIPTION */}
            
            <div className='hotel_descript' id="h_desc">
                {hotel_dets.name ?
                     <h3 >Welcome To {hotel_dets.name }</h3>:<></>
            }
               
                <p style={{text_align:"justify"}}> {convert(hotel_dets.description)}</p>
            
            {/* <span id="dots">...<button onClick={myFunction} id="myBtn"data-testid="myBtn">See More</button></span><span id="more" data-testid="more"></span></p> */}
            </div>
            {/* TODO 1.4 : ROOMS AND SUITS SLIDER */}
            <div style={{ background: "#fbfbfb" }} className="rooms">
                {room_dets.arr ?
                    <Card_Slider data={ room_dets.arr } data2={room_dets.arr2} data3={room_dets.arr3} id={host}></Card_Slider>:<></>
                }
                
            </div>
            {hotel_dets.arr?
            
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={30}
                totalSlides={4}
                isPlaying={true}
                interval={6000}
                infinite={true}
                lockOnWindowScroll={true}
                className="car_2"
            
            >
                    <Slider >
                        {hotel_dets.arr4.map((element,idx) => {
                            return (
                                <Slide index={idx}>
                                    <div className='holder view_holder'>
                                        <HotelRating name={element.name} score={element.score} popularity={element.popularity} img={hotel_dets.arr3}></HotelRating>
                                    </div>
                   
                        </Slide>
                            )
                        })}
                        
 
                    </Slider>
                
 
                    
                        
                <div id="arrow_2" class="arrow-wrapper"  >
                    <div class="arrow arrow--left" >
                        
                        <ButtonBack >BACK</ButtonBack>
                    </div>
 
                        
 
                    <div class="arrow arrow--right">
                            
                        <ButtonNext>NEXT</ButtonNext>
                    
                    </div>
                </div>
            
            
            </CarouselProvider> : <></>}
            
               
            
  
 
            {/* TODO 1.5 AMMENITIES */}
            <div className='holder'>
                <h1 className='text-left  pt-10 font-bold text-2xl mb-8 '>Ammenities</h1>
                {hotel_dets.arr ?<Ammenities h_name={hotel_dets.arr}></Ammenities>:<></>
            }
            
            </div>
           
            {/* TODO 1.8 HOTEL INFORMATION */}
            <div className='holder'>
                <h1 className='text-left  pt-10 font-bold text-2xl mb-8 '>Hotel Ammenities Ratings</h1>
                {hotel_dets.amenities_ratings ?
                    <H_Information h_name={hotel_dets.amenities_ratings}></H_Information>:<></>
                }
            
            </div>
            
            {/* TODO 2.0: MAP  */}
            {hotel_dets.original_metadata?
                <Map name={hotel_dets.name} address={hotel_dets.address} city={hotel_dets.original_metadata.city} country={hotel_dets.original_metadata.country}></Map>:<></>
            }
            
 
            
 
            <Footer/>
        </div>
        
    )
}
 
export default Room