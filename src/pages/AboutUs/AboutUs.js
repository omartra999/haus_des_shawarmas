import React from "react";
import { Footer ,Navbar ,AboutUsHeader, AboutUsSection } from "../../components";

function AboutUs(){
    return (
        <div className="AboutUs_page">
        <Navbar />
        <AboutUsHeader />
        <AboutUsSection />
        <Footer />
        </div>
    )
}
export default AboutUs;