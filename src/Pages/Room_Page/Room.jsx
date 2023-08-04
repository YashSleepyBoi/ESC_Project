// this is the room page
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Stylesheets/Rooms.css";
import {
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
import ImageGrid from "./Components/ImageGrid";
import Footer from "./Components/RoomFooter";

export default function Room() {
  // retrieving the params of the item in modal
  const [scroll, setScroll] = useState(0);
  const [images, setImages] = useState([]);
  const theme = useTheme();
  const numCarouselImages = 3;
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));

  const fetchRoomData = () =>
    fetch("http://localhost:8000/rooms/diH7")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImages(data.rooms.slice(4,4+numCarouselImages).map((item) => item.images[0].high_resolution_url))
      })
      .catch((error) => {
        console.error(error);
      });
  useEffect(() => fetchRoomData, []);
  return (
    <>
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
              totalSlides={images.length}
              isPlaying={true}
              interval={10000}
              infinite={true}
              lockOnWindowScroll={true}
              sx={{ marginBottom: 0 }}
            >
              <Slider>
                {images.map((item, index) => {
                  return (
                    <Slide index={index}>
                      <img
                        src={item}
                        alt="room"/>
                    </Slide>
                  )
                })}
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
        <div className="room-grid">
          <ImageGrid isSmall={isSmall} />
        </div>
        <Footer />
      </div>
    </>
  );
}
