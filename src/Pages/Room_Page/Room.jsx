// this is the room page
import React, { useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar1";
import FindReserve from "../../components/pages/findreserve";
import Rewards from "../../components/pages/rewards";
import Hotels from "../../components/pages/hotels";
import Contact from "../../components/pages/contact";
import Accordion from "./Components/Accordion";
import "./Stylesheets/Rooms.css";
import {
  Button,
  Divider,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import {
  accordionData,
  accomodationDesc,
  roomHeader,
  coverImage,
  roomDesc,
  gridImages,
  footerData,
  actionButtonStyle,
} from "./Content";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Grid } from "@mui/material";
import Modal from "./Components/Modal";
import Suite from "./Components/suite";
import NavBar from "./Components/RoomNavBar";

// const response = await fetch('https://hotelapi.loyalty.dev/api/hotels');
// console.log(response);
export default function Room() {
  // retrieving the params of the item in modal
  const [params, setParams] = useState({}); //params for modal
  const [active, isActive] = useState(false); //active for modal
  const [scroll, setScroll] = useState(0);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <ImageList cols={isSmall ? 1 : 2} gap={35} rowHeight={310}>
            {gridImages.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=552&h=310&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=552&h=310&fit=crop&auto=format&dpr=2 0.5x`}
                  alt={item.title}
                  style={{
                    borderRadius: "14px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                  loading="lazy"
                  width={552} // Set the width attribute to 552
                  height={310} // Set the height attribute to 310
                />
                <div className="transparent-overlay" />
                <ImageListItemBar
                  position="bottom"
                  sx={{ background: "none" }}
                  title={item.title}
                  actionIcon={
                    <div className="action-button">
                      <Button
                        variant="contained"
                        disableElevation="true"
                        sx={actionButtonStyle}
                        onClick={() => {
                          isActive(true);
                          setParams(item);
                        }}
                      >
                        View More
                      </Button>
                    </div>
                  }
                  actionPosition="left"
                />
                {active && (
                  <Modal
                    closeModal={isActive}
                    title={params.title}
                    content={params.content}
                  />
                )}{" "}
                // spawning the modal
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="footer">
          <div className="footer-content">
            <h2
              style={{
                textAlign: "left",
                fontStyle: "revert",
                marginBottom: "1rem",
              }}
            >
              Ascenda Loyalty
            </h2>
            <Divider sx={{ bgcolor: "black", marginBottom: "1rem" }} />
            <Grid container spacing={2}>
              {footerData.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={4}>
                    <p className="footer-text">{item}</p>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
