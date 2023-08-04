import React, { Component } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Button, Divider, Grid } from "@mui/material";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../Stylesheets/Modal.css";
import parse from 'html-react-parser';
import { iconButtonStyle, footerButtonStyle } from "../Content";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  handleScrollToTop = () => {
    this.myRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };
  render() {
    const { closeModal, title, content, amenities, images } = this.props;
    return (
      <>
        <div className="modal-background">
          <div className="modal-container" ref={this.myRef}>
            <div className="title-wrapper">
              <span className="title">Room Details</span>
              <IconButton
                className="icon-button"
                aria-label="close"
                sx={iconButtonStyle}
                size="small"
                onClick={() => closeModal(false)}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div className="carousel">
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={55}
                totalSlides={images.length}
                isPlaying={true}
                interval={10000}
                infinite={true}
                lockOnWindowScroll={true}
              >
                <Slider>
                  {images.map((img, index) => {
                    return (
                      <Slide index={index}>
                        <img style={{width:'1332px'}} src={img.high_resolution_url}></img>
                      </Slide>
                    );
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
            <div className="room title">{title}</div>
            <Divider />
            <div className="room-details">{parse(content)}</div>
            <Divider />
            <div className="modal-ammenities">
              <div className="modal-amenities title">Amenities</div>
              <Divider />
              <div className="modal-amenities content">
                <Grid container spacing={2}>
                  {amenities.map((item) => {
                    return (
                      <Grid item xs={12} sm={6} md={4} role="gridcell">
                        <p className="amenities-text">{item}</p>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            </div>
            <Divider />
            <div className="modal-footer">
              <Button onClick={this.handleScrollToTop} sx={footerButtonStyle}>
                Back to top
              </Button>
              <Button onClick={() => closeModal(false)} sx={footerButtonStyle}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
