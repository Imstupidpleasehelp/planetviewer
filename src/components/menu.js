import React from "react";
import { MiniPlanet } from "./miniplanet";
import { Earth } from "./planets/Earf";
import { PlanetView } from "./planetview";
import { AnimatePresence, motion } from "framer-motion";

export const Menu = () => {
  const orbit = {
    duration: 2,
    x: 500,
  };
/* const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};
*/ 
  const imageVariants = {
    exit: { y: "50%", opacity: 0 },
    enter: {
      y: "0%",
      opacity: 1,
    },
  };
  return (
    <div className="container">
      <div className="sun"></div>
      <motion.div  animate={orbit} >
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
