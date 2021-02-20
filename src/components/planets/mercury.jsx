import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import {PlanetZoom} from './planetZoom'
import { motion } from "framer-motion";

export const Mercury = () => {
  const routeTransition = {
    start: {
      scale: .05,
      y: 120,
    },

    animate: {
      scale: 1,
      transition: {
        duration: 3
      }
    },

    exit: {
      
      scale: .01,
      transition: {
        duration: 2
      }
    }
  };
  return (
    <motion.div variants={routeTransition}
    initial="start"
    animate="animate"
    exit="exit"  className="planetWrapper container">
      <div className="row">
        <div className="col-sm-4">
        <NavLink to="/sol">
        <div className="back">Back</div>
      </NavLink>
          <PlanetView Name="Mercury" Population="0" temperture="477°C" fact="Shifts from -177°C to 477°C on an average day" /></div>
         <div class="col-sm-8">
       <PlanetZoom background="mercury"></PlanetZoom></div>
      </div>
     
    </motion.div>
  );
};
