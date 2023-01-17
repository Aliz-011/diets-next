import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useStateValue, actionType } from '../context/Store';
import { exerciseOptions, fetchData } from '../hooks/fetchData';
import Carousel from './Carousel';

const SearchExercises = () => {
  const [searchInput, setSearchInput] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  const [state, dispatch] = useStateValue();

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchBodyParts();
  }, []);

  const handleSearch = async () => {
    if (searchInput) {
      const response = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );
      const searchedExercise = response.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchInput) ||
          exercise.target.toLowerCase().includes(searchInput) ||
          exercise.bodyPart.toLowerCase().includes(searchInput)
      );
      setSearchInput('');
      dispatch({ type: actionType.SET_EXERCISES, exercises: searchedExercise });
    }
  };
  return (
    <section className="w-full my-24 px-4 md:px-16 py-5">
      <div className="flex w-full items-center justify-center mb-20">
        <h2 className="font-bold text-3xl text-center text-orange-400 capitalize">
          Choose which body part <br /> you should train
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
        className="w-full"
      >
        <div className="w-3/5 mx-auto mb-8">
          <div className="flex items-center md:border-2 rounded md:shadow-sm bg-white">
            <input
              type="text"
              className="pl-3 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
              placeholder="Search what exercise you're looking for..."
              value={searchInput}
              onChange={({ target }) =>
                setSearchInput(target.value.toLowerCase())
              }
            />
            <button
              onClick={handleSearch}
              className="inline-flex items-center py-2 gap-1 px-8 text-white rounded-sm transition-all ease-out duration-150 bg-red-500 hover:bg-red-600 cursor-pointer"
            >
              <span>Search</span>
            </button>
          </div>
        </div>

        <div className="w-full lg:w-4/5 mx-auto px-12 md:px-0">
          <div className="flex items-center gap-5 lg:gap-8 scroll-smooth overflow-x-scroll scrollbar-none py-10">
            {bodyParts.map((item, index) => (
              <Carousel data={item} key={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SearchExercises;
