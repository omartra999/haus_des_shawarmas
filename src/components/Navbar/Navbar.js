import React, { useEffect, useState } from 'react';
import images from '../../constants/images';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import './Navbar.css';

function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div
            className={`navbar ${scrolling ? 'navbar--scrolled' : ''}`}
            animate={{ backgroundColor: scrolling ? '#2d2c2c' : 'transparent' }}
        >
            {/* Hamburger Menu Icon for smaller screens */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Nav items, visible based on screen size */}
            <nav className={`app__nav ${isOpen ? 'app__nav--open' : ''}`}>
                {isOpen && (
                    <span className="close-menu" onClick={toggleMenu}>
                        <FaTimes />
                    </span>
                )}
                <li><a href="/Menu">Menü</a></li>
                <li><a href="/Kontakt">Kontakt</a></li>
                <li><a href="/AboutUS">Über uns</a></li>
            </nav>

            <motion.a animate={controls} href="/">
                <img src={images.logo} className="logo" alt="Logo" />
            </motion.a>
            <a className="icon" rel ="noreferrer" target='_blank' href='https://www.instagram.com/hausdesshawarmas/'><FaInstagram /></a>
        </motion.div>
    );
}

export default Navbar;
