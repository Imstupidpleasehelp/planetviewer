import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import { PlanetZoom } from "./planetZoom";
import { motion } from "framer-motion";
export const Earth = () => {
  const routeTransition = {
    start: {
      scale: 0.05,
    },

    animate: {
      scale: 1,
      transition: {
        duration: 3,
      },
    },

    exit: {
      scale: 0.05,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      variants={routeTransition}
      initial="start"
      animate="animate"
      exit="exit"
      className="planetWrapper container"
    >
      <div className="row">
        <div className="col-sm-4">
          <NavLink to="/sol">
            <div className="back">Back</div>
          </NavLink>
          <PlanetView
            Name="Earth"
            Population="7,878,904,012 (estimate)"
            temperture="1.02 °C"
            fact="Only planet with a Chick-Fil-A"
          />
        </div>
        <div class="col-sm-8">
          <div className="text-center">
            <div className="planet">
              <div className="wrap">
                <div className="background"></div>
                <div className="clouds"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
