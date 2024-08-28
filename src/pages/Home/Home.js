import React from "react";
import { Navbar, Header, Spezielle, AboutUs, Footer } from '../../components'
import './Home.css'

const Home = function Home(){
    return (
        <div className="home-container">
            <Navbar />
            <Header />
            <Spezielle />
            <AboutUs />
        </div>
    )
}
export default Home