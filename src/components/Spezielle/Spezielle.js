import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import images from "../../constants/images";
import "./Spezielle.css";

// Updated items array
const items = [
  { img: images.salad, text: "Taboule", description: "Petersilie, Tomaten, Bulgur, Zitrone, Olivenöl" },
  { img: images.sandwish, text: "Philadelphial Baguette", description: "Fleisch, Pilze, Paprika, Salat Mayo, Käse, Zwiebeln" },
  { img: images.shawarma, text: "Shawarma Teller", description: "Hänchen-Shawarma, Pommes, Knoblauch-Dip, saure Gurken, Salat, Gurken" },
  { img: images.taco, text: "Tacos", description: "Verschiedene Sorten: Fajita, Mexikanische, ....." },
  { img: images.hummus, text: "Hummus", description: "Kichererbsen, Tahini, Zitronensaft, Knoblauch, Olivenöl, Salz, Kreuzkümmel" }
];

function Spezielle() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: [ 1],
        x: [50, 0],
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <div className="spezielle" ref={ref}>
      <motion.h2
        animate={controls}
        initial={{ opacity: 0, x: 50 }}
        className="special-title"
      >
        Spezielles Angebot
      </motion.h2>
      <div className="special-items-container">
        {items.map((item, index) => (
          <motion.div
            key={index}
            animate={controls}
            initial={{ opacity: 0, x: 80 }}
            className="special-item"
          >
            <div className="special-item-image">
              <motion.img
                className="item-image"
                src={item.img}
                alt={item.text}
                initial={{ opacity: 0 }}
                animate={controls}
              />
            </div>
            <div className="special-item-text">
              <p className="item-text">{item.text}</p>
              <p className="item-description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Spezielle;
