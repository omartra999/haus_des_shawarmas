import React from "react";
import images from "../../constants/images";
import './menuImage.css'

function MenuImage(){
    return (
        <div className="menu-image">
            <img src={images.menu01} alt="page01" />
            <img src={images.menu02} alt="page02" />
        </div>
    );
}
export default MenuImage;