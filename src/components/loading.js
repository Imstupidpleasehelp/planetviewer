import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export const Loading = () => {
    const enterSystem = {
        in: {
         scale: 1,
         y: 370
        },
        out: {
          scale: 1,
          x: 100
        },
      };
      const pagetransition = {
        duration: 5,
      };
    return(
    <motion.div
    animate="in"
    exit="out"
    variants={enterSystem}
      transition={pagetransition}>
<NavLink to="/sol"><p>Click meh</p></NavLink>
    </motion.div>
    )
}