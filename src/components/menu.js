import React, {useState} from "react";
import { MiniPlanet } from "./miniplanet";

import useMouse from '@react-hook/mouse-position'
import { motion } from "framer-motion";
export const Menu = (props) => {
  {/* const {cords, setCords} = useState('') */}
  
  /* const ref = React.useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })
 */

  const enterSystem = {
    in: {
     
     scale: 1,
     y: 370
    },
    start: {
      scale: .05,
      y: -20
    },
    zoomOut: {
      scale: 2,
      y: 370
    }
  };
  const pagetransition = {
    duration: 7.5,
  };
  const enterOrbit = {
    orbit: {
      scale: 1
    },
    enterOrbit: {
      scale: 2
    }
    
  }
  const orbitTransition = {
duration: 2
  }

  return (
    <motion.div initial="start"
    animate={"in"}
    /* exit={"zoomOut"}  */ 
    variants={enterSystem}
    transition={pagetransition}  
      className="container">
        
      <div className="sun "></div>
      
   

     

      <motion.div   className="orbitContainer mercuryPath" ><MiniPlanet name="mercury" className="orbitContainer mercuryMini " /></motion.div>
      <div className="orbitContainer venusPath" ><MiniPlanet name="venus" className="orbitContainer venusMini " /></div>
      <div className="orbitContainer earthPath" ><MiniPlanet name="earth" className="orbitContainer earthMini " /></div>
      <div className="orbitContainer marsPath" ><MiniPlanet name="mars" className="orbitContainer marsMini " /></div>
      <div className="orbitContainer juipterPath" ><MiniPlanet name="juipter" className="orbitContainer juipterMini " /></div>
      <div className="orbitContainer saturnPath" ><MiniPlanet name="saturn" className="orbitContainer saturnMini " /></div>
      <div className="orbitContainer uranusPath" ><MiniPlanet name="uranus" className="orbitContainer uranusMini " /></div>
      <div className="orbitContainer neptunePath" ><MiniPlanet name="neptune" className="orbitContainer neptuneMini " /></div>
     
     </motion.div>
  );
};
