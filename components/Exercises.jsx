import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Exercise from './Exercise';
import Pagination from './Pagination';
import { useStateValue, actionType } from '../context/Store';

const Exercises = () => {
  const [{ exercises }, dispatch] = useStateValue();
  const [currentPage, setCurrentPage] = useState(1);

  const dataPerPage = 8;

  const indexOfLastExercise = currentPage * dataPerPage;
  const indexOfFirstExercise = indexOfLastExercise - dataPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  return (
    <section className="w-full my-24 px-4 md:px-16 py-5">
      <div className="mb-20">
        <h2 className="font-bold text-2xl text-orange-400 capitalize">
          Exercises
        </h2>
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
        {currentExercises
          ? currentExercises.map((data, index) => (
              <Exercise key={index} data={data} />
            ))
          : 'No exercise is found'}
      </motion.div>

      <div className="flex items-center mt-24">
        {exercises.length > 8 && (
          <Pagination
            dataLimit={dataPerPage}
            currentPage={currentPage}
            indexOfFirstExercise={indexOfFirstExercise}
            indexOfLastExercise={indexOfLastExercise}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
};

export default Exercises;
