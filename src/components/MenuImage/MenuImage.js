import React from "react";
import images from "../../constants/images";
import './menuImage.css'

function MenuImage(){
    return (
        <div className="menu-image">
            <img className="page01" src={images.menu01} alt="page01" />
            <img className="page02" src={images.menu02} alt="page02" />
            <img className="page03" src={images.menu03} alt="page03" />
            <img className="page04" src={images.menu04} alt="page04" />
            <img className="page05" src={images.menu05} alt="page05" />
        </div>
    );
}
export default MenuImage;