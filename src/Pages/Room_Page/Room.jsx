import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Stylesheets/Rooms.css";
import { accomodationDesc, roomHeader, roomDesc } from "./Content";
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
import RoomSearch from "./Components/Room_Search";
import { Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
function getParams() {
  const { hotel_id, room_id, guests, start_date, end_date, rooms, h_name } = useParams();
  const params = [hotel_id, room_id, guests, start_date, end_date, rooms, h_name];
  return params;
}

export default function Room({ setBottom }) {
  // const { id } = route.params?? id=null

  // retrieving the params of the item in modal
  const [params, setParams] = useState(getParams());
  const [scroll, setScroll] = useState(0);
  const [imagesList, setImagesList] = useState([]);
  const [room, setRoom] = useState({});
  const navigate = useNavigate();
  const theme = useTheme();
  const numCarouselImages = 3;
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));
  setBottom(false);
  const fetchRoomData = () =>
    fetch(`http://localhost:8000/rooms/${params[0]}`)
      .then((response) => {
        return response.json();
      })
  useEffect(() => {
    fetchRoomData().then((data) => {
      const {rooms} = data;
      const r = rooms.find((item) => item.type === params[1]);
      const {images} = r;
      setImagesList(images);
      setRoom(r);
    })
    .catch((error) => {
      console.error(error);
    });;
  }, []);

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
          <Button
            className="banner-button"
            onClick={() => {
              navigate(
                `/roomreserve/${room.roomDescription}/${params[2]}/${room.price}/${params[3]}/${params[4]}/${params[5]}/${imagesList[0].url}/${params[6]}}`
              );
            }}
          >
            Book Now
          </Button>
        </div>
        <div className="accomodation">
          <h2 style={{ marginTop: "2rem" }}>Accomodations</h2>
          <p style={{ color: "#CD7F32" }}>_________</p>
          <p className="accomodation-description">{accomodationDesc}</p>
        </div>
        <div className="room-cards">
          <div className="room-description">
            <h2>{room.roomDescription}</h2>
            <p>{room.long_description ? parse(room.long_description) : roomDesc}</p>
          </div>
          <div className="room-card">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={55}
              totalSlides={imagesList.length}
              isPlaying={true}
              interval={10000}
              infinite={true}
              lockOnWindowScroll={true}
              sx={{ marginBottom: 0 }}
            >
              <Slider>
                {imagesList.map((item, index) => {
                  return (
                    <Slide index={index}>
                      <img
                        src={item.high_resolution_url ? item.high_resolution_url : item.url}
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
