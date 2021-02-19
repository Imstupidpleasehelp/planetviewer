import React, {useState} from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Stars } from './stars';

export const Loading = (props) => {
  const [inSystem, setIn] = props.functions
  const routeTransition = {
    hide: {
      scale: 1,

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
      
      scale: .1,
      transition: {
        duration: 1.4
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
        <NavLink to="/sol" onClick={() => {setIn(true)}} >
          Enter System
          

        </NavLink>
       
      </motion.div>
    </motion.div>
  );
}