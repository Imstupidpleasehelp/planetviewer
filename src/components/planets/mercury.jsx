import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import {PlanetZoom} from './planetZoom'
import { motion } from "framer-motion";
export const Mercury = () => {
  const changepage = {
    in: {
      scale: 1.1,
      
    },
    out: {
      scale: 1,
    },
  };
  const pagetransition = {
    duration: 1.5,
  };
  return (
    <motion.div  className="planetWrapper container">
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
