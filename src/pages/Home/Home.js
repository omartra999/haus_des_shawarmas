import React from "react";
import { Navbar, Header, Spezielle, AboutUs, Besondere, Footer } from '../../components'
import './Home.css'

const Home = function Home(){
    return (
        <div className="home-container">
            <Navbar />
            <Header />
            <Spezielle />
            <AboutUs />
            <Besondere />
            <Footer />

        </div>
    )
}
export default Home