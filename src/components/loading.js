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
                props.click.play()
              }}
              onMouseOver={() => props.setBar('Enter System')} onMouseLeave={() => props.setBar(`...`)}
            
            >
              Sol System
            </NavLink>{" "}
          </div>
          <div className="">
            <NavLink to="/" className="systemButton2" onClick={() => {
                
                props.error.play()
              }}  onMouseOver={() => props.setBar('Error: Insufficient fuel')} onMouseLeave={() => props.setBar(' ...')}>
            Proxima System
            </NavLink>
          </div>
          <div className="">
            <NavLink to="/" className="systemButton2" onClick={() => {
                
                props.error.play()
              }} onMouseOver={() => props.setBar('Error: Quarantine Zone')} onMouseLeave={() => props.setBar('... ')}>
              Klendathu System
            </NavLink>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
