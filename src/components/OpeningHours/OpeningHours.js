// OpeningHours.js
import React from "react";
import { motion } from "framer-motion";
import "./OpeningHours.css";

function OpeningHours() {
  return (
    <motion.div
      className="opening-hours"
      whileHover={{ translateY: -5, boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2), 0 12px 24px rgba(0, 0, 0, 0.15)" }}
      transition={{ duration: 0.3 }}
    >
      <h2>Öffnungszeiten:</h2>
      <p>
        Mo-Do: 11:00 - 22:00 Uhr
        <br />
        Fr-Sa: 11:00 - 01:00 Uhr
        <br />
        So: geschlossen
      </p>
    </motion.div>
  );
}

export default OpeningHours;
