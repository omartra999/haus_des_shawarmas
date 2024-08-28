import React from 'react';
import images from '../../constants/images'; // Adjust the path as needed
import './AboutUs.css'; // Ensure this CSS file is correct
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animationControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0., ease: 'easeOut' }, // Ensure smooth transition
      });
    } else {
      animationControls.start({
        opacity: 0,
        x: -50,
      });
    }
  }, [inView, animationControls]);

  return (
    <motion.div
      className="about-us-container"
      ref={ref}
      animate={animationControls}
      initial={{ opacity: 0, x: -50 }} // Ensure initial state
    >
      <div className="about-us-content">
        <div className="logo-and-icons">
          <img src={images.logo} alt="Logo" className="aboutUs-logo" />
        </div>
        <div className="text-content">
          <h2 className="about-us-header">Über uns</h2>
          <p className="about-us-text">
            Willkommen bei Haus des Shawarmas! Wir sind leidenschaftliche Feinschmecker, die es lieben, Ihnen authentische, köstliche Shawarma-Gerichte und mehr zu servieren. Unser Ziel ist es, jedem Besuch ein einzigartiges Geschmackserlebnis zu bieten. Entdecken Sie unsere vielfältige Speisekarte und genießen Sie frisch zubereitete Spezialitäten, die Ihre Geschmacksknospen verwöhnen werden.
          </p>
          <a href="/ueber-uns" className="mehr-lesen-button">
            Mehr lesen
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
