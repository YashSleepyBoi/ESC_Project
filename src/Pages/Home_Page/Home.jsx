import React from "react";
import "./Home.css";
import Cover from "./Components/Cover.jsx";
import Features from "./Components/Features.jsx";
import Services from "./Components/Services.jsx";
import VerticalCardSwiper from "./Components/Reviews.jsx";
import Footer from "../Room_Page/Components/RoomFooter.jsx";
// import MailList from "./Components/Cover.jsx";
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
