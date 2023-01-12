import React, { useState, useEffect } from 'react';
import { BiRun } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Carousel = ({ data }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-[230px] h-[150px] md:min-w-[230px] text-center capitalize font-medium shadow-md px-4 py-6 rounded-md cursor-pointer"
    >
      <div className="bg-red-100 w-fit p-4 rounded-full mx-auto mb-4">
        <BiRun className="w-6 h-6 text-red-500" />
      </div>
      <h2>{data}</h2>
    </motion.div>
  );
};

export default Carousel;
