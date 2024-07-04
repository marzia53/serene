"use client";

import { motion} from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <motion.section
    initial={{opacity: 0}}
    animate={{opacity:1, transition: {delay:2}}}
    className="min-h-screen flex items-center overflow-x-hidden"
    >
      contact page

    </motion.section>
  );
};

export default Contact;