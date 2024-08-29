import React from "react";
import images from "../../constants/images";
import "./AboutUsHeader.css"

const AboutUsHeader = () => {
    return (
        <div className="about-us-header">
            <img className="header_logo" src={images.logo} alt="logo" />
        </div>
    )
}

export default AboutUsHeader;