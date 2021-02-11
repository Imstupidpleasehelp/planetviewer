import React, {useState} from "react";
import { MiniPlanet } from "./miniplanet";
import { Earth } from "./planets/Earf";
import { PlanetView } from "./planetview";
import useMouse from '@react-hook/mouse-position'
import { motion } from "framer-motion"
export const Menu = () => {
  const {cords, setCords} = useState('')
  const orbit = {
    in: {
      y: 0
    },
    out: {
      y: '200vh'
    },
  };
  const ref = React.useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })
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
      <div className="sun "></div>
      <div ref={ref}>
      
      x: ${mouse.x}
      y: ${mouse.y}
   

     

     
        <div className="orbitContainer mercuryOrbit"><MiniPlanet className="mercuryMini inner" name="mercury" /></div>
      
      <div className="orbitContainer venusOrbit"><MiniPlanet className="venusMini inner" name="venus" /></div>
      <div className="orbitContainer earthOrbit"><MiniPlanet className="earthMini inner" name="earth" /></div>
      <div className="orbitContainer marsOrbit"><MiniPlanet className="marsMini inner" name="mars" /></div>

     <div className="orbitContainer juipterOrbit"> <MiniPlanet className="juipterMini inner" name="juipter" /></div>
     <div className="orbitContainer saturnOrbit"> <MiniPlanet className="saturnMini inner" name="saturn" /></div>
      <div className="orbitContainer uranusOrbit"><MiniPlanet className="uranusMini inner" name="uranus" /></div>
     <div className="orbitContainer neptuneOrbit"> <MiniPlanet className="neptuneMini inner" name="neptune" /></div>
     </div></div>
  );
};
