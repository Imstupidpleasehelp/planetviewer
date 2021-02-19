import React from "react";
import { MiniPlanet } from "./miniplanet";

import useMouse from '@react-hook/mouse-position'
import { motion } from "framer-motion";
export const Menu = (props) => {
  const [inSystem, setIn] = props.functions
  /* const {cords, setCords} = useState('') */
  
  /* const ref = React.useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })
 */

  const enterSystem = {
    in: {
     
     scale: .95,
     y: 420
    },
    start: {
      scale: .05,
      y: -20
    },
    zoomOut: {
      scale: 1.5,
      y: 420,
      transition: {
        duration: 2
      }
    }
  };
  const comeBack = {
    in: {
     
      scale: 1,
      y: 420,
      transition: {
        duration: 3.5
      }
     },
     start: {
       scale: .02,
       y: 520
     },
     exit: {
       scale: 1

     }
  }
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
     exit={"zoomOut"}  
    variants={inSystem ? enterSystem : comeBack}
    transition={pagetransition}  
      className="container">
        
      <div className="sun "></div>
      
   

     

      <motion.div animate={enterOrbit} inital={"orbit"} in={"enterOrbit"} transition={orbitTransition}  className="orbitContainer mercuryPath" ><MiniPlanet name="mercury" className="orbitContainer mercuryMini " /></motion.div>
      <div className="orbitContainer venusPath" ><MiniPlanet name="venus" className="orbitContainer venusMini " /></div>
      <div className="orbitContainer earthPath" ><MiniPlanet name="earth" className="orbitContainer earthMini " /></div>
      <div className="orbitContainer marsPath" ><MiniPlanet name="mars" className="orbitContainer marsMini " /></div>
      <div className="orbitContainer juipterPath" ><MiniPlanet name="juipter" className="orbitContainer juipterMini " /></div>
      <div className="orbitContainer saturnPath" ><MiniPlanet name="saturn" className="orbitContainer2 saturnMini " /></div>
      <div className="orbitContainer uranusPath" ><MiniPlanet name="uranus" className="orbitContainer uranusMini " /></div>
      <div className="orbitContainer neptunePath" ><MiniPlanet name="neptune" className="orbitContainer neptuneMini " /></div>
     
     </motion.div>
  );
};
