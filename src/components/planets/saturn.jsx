import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import {PlanetZoom} from './planetZoom'
import { motion } from "framer-motion";
export const Saturn = (props) => {
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
        <NavLink to="/sol">
        <div className="back">Back</div>
      </NavLink>
          <PlanetView Name="Saturn" Population="0" temperture="-178°C" fact="Saturn has over 82 moons" /></div>
         <div class="col-sm-8" onMouseOver={() => props.setBar("Uninhabitable")}
        onMouseLeave={() => props.setBar(`...`)}>
        <PlanetZoom background="Saturn" /></div>
      </div>
      
    </motion.div>
  );
};