import React, {useState} from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export const Loading = (props) => {
  const routeTransition = {
    hide: {
      x: "100vw"
    },

    animate: {
      x: 0,
      transition: {
        delay: 0.75,
        duration: 0.75,
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    },

    exit: {
      x: "-100vw",
      scale: .1,
      transition: {
        duration: 0.75
      }
    }
  };

return (

    <motion.div // this is the div that will animate the entire route
      variants={routeTransition}
      initial="hide"
      animate="animate"
      exit="exit"
    > 
      <motion.div // this div will only animate the button
        
        
        className="loadingScreen"
      >
        <NavLink to="/sol">
          <button>
            <p>Enter System</p>
          </button>
        </NavLink>
      </motion.div>
    </motion.div>
  );
}