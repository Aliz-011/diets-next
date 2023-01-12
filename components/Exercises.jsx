import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { BiRun, BiSearch } from 'react-icons/bi';
import { exerciseOptions, fetchData } from '../hooks/fetchData';
import Carousel from './Carousel';

const Exercises = () => {
  const [searchInput, setSearchInput] = useState('');
  const [exercises, setExercises] = useState([]);

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
      localStorage.setItem('bodyParts', JSON.stringify(bodyPartsData));
    };

    const bodyPartsFromLocalStorage = localStorage.getItem('bodyParts');
    if (!bodyPartsFromLocalStorage) {
      fetchBodyParts();
    }
    setBodyParts(JSON.parse(bodyPartsFromLocalStorage));
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
      setExercises(searchedExercise);
    }
  };
  return (
    <section className="w-full my-24 px-4 md:px-16 py-5">
      <div className="flex w-full items-center justify-center mb-20">
        <h2 className="font-bold text-2xl text-orange-400">
          Choose which body part you should train
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
        <div className="w-2/3 mx-auto mb-8">
          <div className="flex items-center md:border-2 rounded md:shadow-sm bg-white">
            <input
              type="text"
              className="pl-3 w-96 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
              placeholder="Search what exercise you're looking for..."
              value={searchInput}
              onChange={({ target }) =>
                setSearchInput(target.value.toLowerCase())
              }
            />
            <button
              onClick={handleSearch}
              className="hidden md:inline-flex p-2 rounded-sm transition-all ease-out duration-150 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 cursor-pointer"
            >
              <BiSearch />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-8 scroll-smooth overflow-x-scroll scrollbar-none py-10">
          {bodyParts.map((item, index) => (
            <Carousel data={item} key={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Exercises;
