import React, {useEffect, useState} from 'react';
import images from '../../constants/images'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { motion, useAnimation } from 'framer-motion'
import './Navbar.css';

function Navbar(){
    const [scrolling, setScrolling] = useState(false);
    const controls = useAnimation();

    useEffect(() =>{
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <motion.div className={`navbar ${scrolling ? 'navbar--scrolled' : ''}`}
        animate = {{backgroundColor : scrolling ? '#2d2c2c' : 'transparent'}}>
            <nav className='app__nav'>
                    <li><a href="#">Menü</a></li>
                    <li><a href="#">Kontakt</a></li>
                    <li><a href="#">Über uns</a></li>
                </nav>
                <motion.a animate = {controls} href = "#Home"><img src={images.logo} class = "logo" alt="Logo" /></motion.a>
                <a class = "icon" href='#'><FaFacebook /></a>
                <a class = "icon" href='#'><FaInstagram /></a>
            </motion.div>
        );

}
export default Navbar;