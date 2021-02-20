import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Stars } from "./stars";

export const Loading = (props) => {
  const [inSystem, setIn] = props.functions;
  const routeTransition = {
    start: {
      scale: .05,
    },

    animate: {
     scale: 1,
     y: 40,
     transition: {
       duration: 2.5
     }
    },

    exit: {
      scale: 0.1,
      transition: {
        duration: 1.4,
      },
    },
  };

  return (
    <motion.div // this is the div that will animate the entire route
      variants={routeTransition}
      initial="start"
      animate="animate"
      exit="exit"
    >
      <motion.div // this div will only animate the button
        className="loadingScreen"
      >
        <div className="row">
          <div className="">
            <NavLink
              to="/sol"
              className="systemButton"
              onClick={() => {
                setIn(true);
              }}
            >
              Sol System
            </NavLink>{" "}
          </div>
          <div className="">
            <NavLink to="/" className="systemButton">
            Proxima System
            </NavLink>
          </div>
          <div className="">
            <NavLink to="/" className="systemButton">
              Klendathu System
            </NavLink>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
