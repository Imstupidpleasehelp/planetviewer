import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import {PlanetZoom} from './planetZoom'
import { motion } from "framer-motion";

export const Mercury = () => {
  const routeTransition = {
    start: {
      scale: .2
    },

    animate: {
      scale: 1,
      transition: {
        duration: 3
      }
    },

    exit: {
      
      scale: .05,
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
          <PlanetView Name="Mercury" Population="0" temperture="477°C" /></div>
         <div class="col-sm-8">
       <PlanetZoom background="mercury"></PlanetZoom></div>
      </div>
      <NavLink to="/sol">
        <div className="back">Back</div>
      </NavLink>
    </motion.div>
  );
};
