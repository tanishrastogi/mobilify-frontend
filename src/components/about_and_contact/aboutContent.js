import React from "react";
import "./about_contact.css";
import MailBox from "../homepage/mailBox";
import Data from "./data";

const AboutContent = () => {
    return <div>
        <div className="about-container">
        <div className="left">
            <Data />
            
        </div>
        <div className="right">
            <MailBox />
        </div>
        
    </div>
    </div>
}

export default AboutContent;