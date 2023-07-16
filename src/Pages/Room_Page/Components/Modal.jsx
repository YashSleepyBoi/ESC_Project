import React, { Component } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Button, Divider } from "@mui/material";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../Stylesheets/Modal.css";
import { iconButtonStyle, footerButtonStyle } from "../Content";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  handleScrollToTop = () => {
    this.myRef.current.scrollTo({ top: 0, behavior: "smooth" })
  };
  render() {
    const { closeModal, title, content } = this.props;
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
                totalSlides={2}
                isPlaying={true}
                interval={10000}
                infinite={true}
                lockOnWindowScroll={true}
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
            <div className="room-title">{title}</div>
            <Divider />
            <div className="room-details">{content}</div>
            <Divider />
            <div className="modal-footer">
              <Button
                onClick={this.handleScrollToTop}
                sx={footerButtonStyle}
              >
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
