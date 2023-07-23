import React from "react";
import "./Home.css";
import Card from "/src/components/Card.jsx";
import Cover from "/src/Pages/Home_Page/Components/Cover.jsx";
import Features from "/src/Pages/Home_Page/Components/Features.jsx";
import Services from "/src/Pages/Home_Page/Components/Services.jsx";
import VerticalCardSwiper from "/src/Pages/Home_Page/Components/Reviews.jsx";
import Footer from "/src/Pages/Room_Page/Components/RoomFooter.jsx";
import MailList from "/src/Pages/Home_Page/Components/MailList.jsx";
import { Link } from "react-router-dom";

const Home = () =>{
    return (
        <div className="home-container">
            <Cover />
            <div className="services"><Services /></div>
            <div className="hotel-cont"><p className="hotel-title" align="left" style={{ color: 'white', fontSize: '30px', marginTop: '40px', marginLeft: '80px', marginBottom: '40px', fontWeight: 'bold' }}>Our Top Hotels</p>
            <Features /></div>
            {/* <div className="maillist-cont"><p className="mail-title" align="left" style={{ color: 'white', fontSize: '30px', marginTop: '40px', marginLeft: '80px', marginBottom: '0px', fontWeight: 'bold' }}><br/>What People Say</p>
            <MailList/></div> */}
            <div className="reviews-cont"><p className="reviews-title" align="left" style={{ color: 'white', fontSize: '30px', marginTop: '40px', marginLeft: '80px', marginBottom: '0px', fontWeight: 'bold' }}><br/>What People Say</p><div className='cards-autoplay'>
            <VerticalCardSwiper/></div></div>
            <div className='homepage-footer'><Footer/></div>
        </div>
    );
};

export default Home;