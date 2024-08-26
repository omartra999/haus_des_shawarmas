import React, {useEffect, useState} from 'react';
import images from '../../constants/images'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import './Navbar.css';

function Navbar(){
    const [scrolling, setScrolling] = useState(false);

    useEffect(() =>{
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`navbar ${scrolling ? 'navbar--scrolled' : ''}`}>
            <nav className='app__nav'>
                    <li><a href="#">Menü</a></li>
                    <li><a href="#">Kontakt</a></li>
                    <li><a href="#">Über uns</a></li>
                </nav>
                <a href = "#Home"><img src={images.logo} class = "logo" alt="Logo" /></a>
                <a class = "icon" href='#'><FaFacebook /></a>
                <a class = "icon" href='#'><FaInstagram /></a>
            </div>
        );

}
export default Navbar;