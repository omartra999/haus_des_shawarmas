// Kontakt.js
import React from "react";
import { motion } from "framer-motion";
import { OpeningHours } from "../../components"; // Reusing the OpeningHours component
import "./Kontakt.css";

function Kontakt() {
  return (
    <motion.div
      className="contact-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact-details">
        <h2>Kontakt</h2>
        <p>
          Rüttenscheider Str. 105, 45130 Essen
          <br />
          Telefon: 0201 31972777
        </p>

        {/* Reusing the OpeningHours component */}
        <OpeningHours />
      </div>

      {/* Embedding Google Map */}
      <div className="map-container">
        <iframe
          title="Haus des Shawarmas Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320005.9547227214!2d6.8075475999999915!3d51.19979445000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c3df2c72c1f5%3A0xee85266d86f7ec95!2sHaus%20Des%20Shawarmas%20-%20Essen%20R%C3%BCttenscheid!5e0!3m2!1sen!2sde!4v1724947241899!5m2!1sen!2sde"
          width="600"
          height="450"
          style={{ border: 0 }} // Correctly using an object for the style prop
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
}

export default Kontakt;
