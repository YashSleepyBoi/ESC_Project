import React, { useState } from 'react';
import {Component} from 'react';
import '../Stylesheets/Reviews.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// import Card from '/src/Pages/Home_Page/Components/Card.jsx';

export default class VerticalCardSwiper extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3500,
      cssEase: "linear",
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='container'>
        <Slider {...settings}>
          <div className='card'>
            <p className='p-header'>Emma, Los Angeles</p>
            <p className='p-content'>I had the best time visiting Spain! Ascenda is a great place to find hotels!<br/>I visited the south of France for the summer, and did travelling within Europe. With Ascenda, I was easily able to find hotels in all of my destinations and for good prices too! Would definitely recommend this platform.</p>
          </div>
          <div className='card'>
            <p className='p-header'>James, England</p>
            <p className='p-content'>I had the best time visiting Spain! Ascenda is a great place to find hotels!<br/>I visited the south of France for the summer, and did travelling within Europe. With Ascenda, I was easily able to find hotels in all of my destinations and for good prices too! Would definitely recommend this platform.</p>
          </div>
          <div className='card'>
            <p className='p-header'>Fran, Norway</p>
            <p className='p-content'>I had the best time visiting Spain! Ascenda is a great place to find hotels!<br/>I visited the south of France for the summer, and did travelling within Europe. With Ascenda, I was easily able to find hotels in all of my destinations and for good prices too! Would definitely recommend this platform.</p>
          </div>
          <div className='card'>
            <p className='p-header'>Ria, Mumbai</p>
            <p className='p-content'>I had the best time visiting Spain! Ascenda is a great place to find hotels!<br/>I visited the south of France for the summer, and did travelling within Europe. With Ascenda, I was easily able to find hotels in all of my destinations and for good prices too! Would definitely recommend this platform.</p>
          </div>
          <div className='card'>
            <p className='p-header'>Jess, Singapore</p>
            <p className='p-content'>I had the best time visiting Spain! Ascenda is a great place to find hotels!<br/>I visited the south of France for the summer, and did travelling within Europe. With Ascenda, I was easily able to find hotels in all of my destinations and for good prices too! Would definitely recommend this platform.</p>
          </div>
          <div className='card'>
            <p className='p-header'>Jose, Mexico</p>
            <p className='p-content'>I had the best time visiting Spain! Ascenda is a great place to find hotels!<br/>I visited the south of France for the summer, and did travelling within Europe. With Ascenda, I was easily able to find hotels in all of my destinations and for good prices too! Would definitely recommend this platform.</p>
          </div>
        </Slider>
      </div>
    );
  }
}


// const cardData = [
//     {
//         title: 'Emma, Los Angeles',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere, lorem id venenatis dapibus, velit dui dignissim arcu.',
//       },
//       {
//         title: 'James, England',
//         content: 'Praesent eget sagittis elit. Nulla tincidunt scelerisque purus eu ullamcorper. Cras nec lectus eu ex bibendum.',
//       },
//       {
//         title: 'Jess, Singapore',
//         content: 'Quisque eu felis in est congue pharetra. Suspendisse et eros a turpis convallis commodo.',
//       },
//       {
//         title: 'Fran, Norway',
//         content: 'Fusce rhoncus ipsum at risus varius luctus. Ut fermentum velit ut massa laoreet, ut fermentum velit interdum.',
//       }
// ];