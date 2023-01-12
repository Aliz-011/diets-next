import { motion } from 'framer-motion';
import React from 'react';
import { BiDumbbell, BiCalendar, BiDollar, BiHomeSmile } from 'react-icons/bi';

const Service = () => {
  return (
    <section className="w-screen my-24 px-4 md:px-16 py-5">
      <div className="flex items-center justify-center mb-20">
        <h2 className="font-bold text-2xl text-orange-400">Our services</h2>
      </div>

      <motion.div
        initial={{ y: 300, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.75, type: 'spring' },
        }}
        viewport={{ once: false }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full shadow-md px-4 py-6 rounded-md"
        >
          <div className="bg-blue-100 w-fit p-4 rounded-full mx-auto mb-4">
            <BiDumbbell className="w-6 h-6 text-blue-500" />
          </div>
          <div className=" text-center space-y-4">
            <h2 className="font-bold">Set your goal</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              aspernatur.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full shadow-md px-4 py-6 rounded-md"
        >
          <div className="bg-red-100 w-fit p-4 rounded-full mx-auto mb-4">
            <BiCalendar className="w-6 h-6 text-red-500" />
          </div>
          <div className="text-center space-y-4">
            <h2 className="font-bold">Customize your schedule</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur minus.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full shadow-md px-4 py-6 rounded-md"
        >
          <div className="bg-green-100 w-fit p-4 rounded-full mx-auto mb-4">
            <BiDollar className="w-6 h-6 text-green-500" />
          </div>
          <div className="text-center space-y-4">
            <h2 className="font-bold">Cheap Price</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur minus.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full shadow-md px-4 py-6 rounded-md"
        >
          <div className="bg-blue-100 w-fit p-4 rounded-full mx-auto mb-4">
            <BiHomeSmile className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-center space-y-4">
            <h2 className="font-bold">Do it at Home.</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Service;
