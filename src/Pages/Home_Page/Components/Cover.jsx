import React from 'react';
import "../Stylesheets/Cover.css"

const Cover = () =>{
    return (
        <div className="main-cover">
                <img src="/src/components/Assets/mbs.jpeg"></img>
                <div className="heading-container">
                    <p className='heading'>Travel better.<br/>Live better.</p>
                </div>
        </div>
    );
};

export default Cover;
