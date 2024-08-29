import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import images from '../../constants/images';
import './Besondere.css'; // Ensure this CSS file is in the same directory

function Besondere() {
  // Image source from constants
  const image = images.besondere;
  // Title and description directly in the component
  const title = "Köstliches Shawarma";
  const description = "Genießen Sie unser geschmackvolles Shawarma, zubereitet mit den besten Zutaten und serviert mit einer speziellen Soße. Perfekt für jede Mahlzeit des Tages.";

  // Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger animation when 20% of the component is visible
  });

  return (
    <div className="besondere-container" ref={ref}>
      <motion.div 
        className="dish-image"
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img src={image} alt={title} className="image" />
      </motion.div>
      <motion.div 
        className="dish-content"
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h2 
          className="dish-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {title.split('').map((letter, index) => (
            <motion.span
              key={index}
              className="title-letter"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>
        <p className="dish-description">
          {description}
        </p>
        <a href="/Menu" className="view-menu-button">Menü ansehen</a>
        <a href = "https://www.lieferando.de/speisekarte/haus-des-shawarmas" target='_blank' className='view-menu-button' rel = "noreferrer">Lieferando</a>
        <a href = "https://wolt.com/de/deu/essen/restaurant/haus-des-shawarmas?srsltid=AfmBOooewteHwiKqzaRyKMtbbDolarQChF6EUZnglFvy2sUno2GCqSGc" target='_blank' rel = "noreferrer" className='view-menu-button'>Wolt</a>
      </motion.div>
    </div>
  );
}

export default Besondere;
