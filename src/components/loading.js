import React, {useState} from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export const Loading = (props) => {
 
    const loading = {
        start: {
         scale: 2,
       
        },
        out: {
          scale: .1,
        
        },
      };
      const pagetransition = {
        duration: 2,
      };
    return(
    <motion.div initial="start"
    animate="in"
   exit="out"
    variants={loading}
    transition={pagetransition}    className="loadingScreen"
    >
<NavLink to="/sol"><button ><p >Enter System</p></button></NavLink>
    </motion.div>
    )
}