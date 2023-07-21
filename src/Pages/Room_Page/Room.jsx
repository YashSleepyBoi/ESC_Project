// this is the room page
import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindReserve from "../../components/pages/findreserve";
import Rewards from "../../components/pages/rewards";
import Hotels from "../../components/pages/hotels";
import Contact from "../../components/pages/contact";
import Accordion from "./Components/Accordion";
import "./Stylesheets/Rooms.css";
import {
  accordionData,
  accomodationDesc,
  roomHeader,
  roomDesc,
} from "./Content";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Suite from "./Components/suite";
import NavBar from "./Components/RoomNavBar";
import ImageGrid from "./Components/ImageGrid";
import Footer from "./Components/Footer";

export default function Room() {
  // retrieving the params of the item in modal

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));

  const fetchUserData = () => {
    const apiUrl = 'https://hotelapi.loyalty.dev/api/hotels?destination_id=WD0M';
    
    fetch(apiUrl, {mode: 'no-cors'})
      .then(response => {
        console.log(response.json());
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  return (
    <>
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
      <div
        style={{
          width: "100%",
          height: "80vh",
        }}
      >
        <div className="banner-container">
          <div className="banner-image" />
        </div>
        <div className="accomodation">
          <h2 style={{ marginTop: "2rem" }}>Accomodations</h2>
          <p style={{ color: "#CD7F32" }}>_________</p>
          <p className="accomodation-description">{accomodationDesc}</p>
        </div>
        <div className="room-cards">
          <div className="room-description">
            <h2>{roomHeader}</h2>
            <p>{roomDesc}</p>
          </div>
          <div className="room-card">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={55}
              totalSlides={2}
              isPlaying={true}
              interval={10000}
              infinite={true}
              lockOnWindowScroll={true}
              sx={{ marginBottom: 0 }}
            >
              <Slider>
                <Slide index={0}>
                  <img src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"></img>
                </Slide>

                <Slide index={1}>
                  <img src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"></img>
                </Slide>
              </Slider>

              <div id="arrow_2" class="arrow-wrapper">
                <div class="arrow arrow--left">
                  <ButtonBack>BACK</ButtonBack>
                </div>

                <div class="arrow arrow--right">
                  <ButtonNext>NEXT</ButtonNext>
                </div>
              </div>
            </CarouselProvider>
          </div>
        </div>
        <Suite isSmall={isSmall} />
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
        <div className="room-grid">
          <ImageGrid isSmall={isSmall} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
