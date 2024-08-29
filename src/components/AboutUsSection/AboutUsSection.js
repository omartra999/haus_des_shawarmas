// AboutUsSection.js
import React, { useEffect } from "react";
import "./AboutUsSection.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { OpeningHours }  from "../../components" // Import the OpeningHours component

function AboutUsSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      className="about-us-section"
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
    >
      <motion.div className="text-container">
        <h2>Unsere Geschichte:</h2>
        <p>
          Willkommen bei Haus des Shawarmas, wo Geschmack und Tradition
          aufeinandertreffen! Unsere Geschichte begann mit einer einfachen Idee:
          die authentischen Aromen des Nahen Ostens nach Deutschland zu bringen
          und ein kulinarisches Erlebnis zu schaffen, das unsere Gäste auf eine
          geschmackliche Reise mitnimmt. Im Haus des Shawarmas ist jedes Gericht
          eine Hommage an die reiche Kultur und die tief verwurzelten
          Traditionen, die unsere Küche inspiriert haben. Wir verwenden nur die
          frischesten Zutaten und authentische Gewürze, um Ihnen die
          köstlichsten Shawarmas, herzhaften Falafel und eine Vielfalt an Mezze
          zu servieren, die Ihre Sinne verzaubern werden. Unser Team besteht aus
          passionierten Köchen und Mitarbeiterinnen und Mitarbeitern, die sich
          darauf freuen, Ihnen ein Stück ihrer Heimat näherzubringen. Wir sind
          stolz darauf, eine warme und einladende Atmosphäre zu bieten, in der
          Familie und Freunde zusammenkommen, um gutes Essen und unvergessliche
          Momente zu teilen. Kommen Sie vorbei und erleben Sie das Haus des
          Shawarmas – Ihr Zuhause für authentischen Geschmack und herzliche
          Gastfreundschaft.
        </p>
      </motion.div>

      {/* Use the OpeningHours component here */}
      <OpeningHours />
    </motion.div>
  );
}

export default AboutUsSection;
