'use client'
import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "@/constants/motion";
const TittleText = ({ textStyles, title }) => {
  return (
    <>
      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`mt-2 text-third-color font-bold md:text-[64px] text-[36px] text-center ${textStyles}`}
      >
        {title}
      </motion.h2>
    </>
  );
};

export default TittleText;
