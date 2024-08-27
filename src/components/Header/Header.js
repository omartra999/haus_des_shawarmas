import React, { useEffect } from "react";
import images from "../../constants/images";
import './Header.css'
import { motion, useAnimation } from "framer-motion"

function Header(){
    const controls = useAnimation();
    useEffect(() =>{
        controls.start({
            scale: [0.8,1.1,1],
            opacity: [0,1],
            trasformation : {duration : 0.6, ease: "easeOut"},
        })
    }, [controls]);

    return(
        <div className="header" >
            <div className="header_content">    
            <motion.h1 animate = {controls}>Shawarma Vibes</motion.h1>
            <motion.p animate = {controls}>Willkommen im Haus des Shawarmas – Wo Geschmack auf Tradition trifft!</motion.p>
            </div>
        </div>
    )
}
export default Header