"use client";
import React from "react";
import {motion} from "framer-motion"; 

const Treatments = () => {
  return  <motion.section
  initial={{opacity: 0}}
  animate={{opacity:1, transition: {delay:2}}}
  className="min-h-screen flex items-center overflow-x-hidden"
  >
    treatments page</motion.section>;
  
};

export default Treatments;