import React, {useState} from "react";
import { MiniPlanet } from "./miniplanet";
import { Earth } from "./planets/Earf";
import { PlanetView } from "./planetview";
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
const {inSystem, setIn} = props.passMeDown
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
      scale: 10,
      y: 370
    }
  };
  const pagetransition = {
    duration: 5,
  };

  return (
    <motion.div initial="start"
    animate={inSystem ? "in" : "zoomOut"}
   
    variants={enterSystem}
    transition={pagetransition}  
      className="container">
      <div className="sun "></div>
      
   

     

      <div class="orbitContainer mercuryPath" ><MiniPlanet name="mercury" className="orbitContainer mercuryMini " /></div>
      <div class="orbitContainer venusPath" ><MiniPlanet name="venus" className="orbitContainer venusMini " /></div>
      <div class="orbitContainer earthPath" ><MiniPlanet name="earth" className="orbitContainer earthMini " /></div>
      <div class="orbitContainer marsPath" ><MiniPlanet name="mars" className="orbitContainer marsMini " /></div>
      <div class="orbitContainer juipterPath" ><MiniPlanet name="juipter" className="orbitContainer juipterMini " /></div>
      <div class="orbitContainer saturnPath" ><MiniPlanet name="saturn" className="orbitContainer saturnMini " /></div>
      <div class="orbitContainer uranusPath" ><MiniPlanet name="uranus" className="orbitContainer uranusMini " /></div>
      <div class="orbitContainer neptunePath" ><MiniPlanet name="neptune" className="orbitContainer neptuneMini " /></div>
     </motion.div>
  );
};
