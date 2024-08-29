import React from "react";
import "./Menu.css"
import { Navbar, Footer, MenuImage } from "../../components"

const Menu = () => {
    return (
    
        <div className="menu">
            <Navbar />
            <MenuImage />
            <Footer />
        </div>
    );
}
export default Menu;