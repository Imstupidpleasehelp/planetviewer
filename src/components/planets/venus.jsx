import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import {PlanetZoom} from './planetZoom'
import { motion } from "framer-motion";
export const Venus = () => {
  const routeTransition = {
    start: {
      scale: .05
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
    exit="exit" className="planetWrapper container">
      <div className="row">
        <div className="col-sm-4">
          <PlanetView Name="Venus" Population="0" temperture="467°C" /></div>
         <div class="col-sm-8">
        <PlanetZoom background="venus"></PlanetZoom></div>
      </div>
      <NavLink to="/sol">
        <div className="back">Back</div>
      </NavLink>
    </motion.div>
  );
};
