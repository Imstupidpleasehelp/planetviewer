import React from "react";
import { MiniPlanet } from "./miniplanet";
import { Earth } from "./planets/Earf";
import { PlanetView } from "./planetview";
import { AnimatePresence, motion } from "framer-motion";
import useMouse from '@react-hook/mouse-position'

export const Menu = () => {
  const orbit = {
    in: {
      y: 0
    },
    out: {
      y: '200vh'
    },
  };
  
  const floatTransition = {
    duration: 1.5
  }
/*
 <motion.div initial="out"
      animate="in"
      exit="out"
      variants={floatIn1}
      transition={floatTransition}
*/

  return (
    <div className="container">
      <div className="sun"></div>
      <motion.div 
      initial="out"
      animate="in"
      exit="out"
      variants={orbit}
      transition={floatTransition}>
        <MiniPlanet className="mercuryMini" name="mercury" />
      </motion.div>
      <MiniPlanet className="venusMini" name="venus" />
      <MiniPlanet className="earthMini" name="earth" />
      <MiniPlanet className="marsMini" name="mars" />

      <MiniPlanet className="juipterMini" name="juipter" />
      <MiniPlanet className="saturnMini" name="saturn" />
      <MiniPlanet className="uranusMini" name="uranus" />
      <MiniPlanet className="neptuneMini" name="neptune" />
    </div>
  );
};
