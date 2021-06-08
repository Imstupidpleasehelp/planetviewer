import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import {PlanetZoom} from './planetZoom'
import { motion } from "framer-motion";
export const Juipter = (props) => {
  const routeTransition = {
    start: {
      scale: .05,
      y: 400,
    },

    animate: {
      scale: 1,
      y: 120,
      transition: {
        duration: 2
      }
    },

    exit: {
      y: -500,
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
    exit="exit" className="planetWrapper container">
      <div className="row">
        <div className="col-sm-4">
        <NavLink to="/Sol">
        <div className="back">Back</div>
      </NavLink>
          <PlanetView  Name="Juipter" Population="0" temperture="-145°C" fact="Winds as high as 335mph" /></div>
         <div class="col-sm-8"  onMouseOver={() => props.setBar("Uninhabitable")}
        onMouseLeave={() => props.setBar(`...`)}>
        <PlanetZoom background="juipter"  /></div>
      </div>
      
    </motion.div>
  );
};
