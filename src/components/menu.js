import React, {useState} from "react";
import { MiniPlanet } from "./miniplanet";
import { Earth } from "./planets/Earf";
import { PlanetView } from "./planetview";
import useMouse from '@react-hook/mouse-position'

export const Menu = () => {
  const {cords, setCords} = useState('')
  
  const ref = React.useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })
 
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
      
   

     

     
      <div class="orbitContainer earth" ><MiniPlanet name="earth" className="orbitContainer earthMini " /></div>
  
     </div>
  );
};
