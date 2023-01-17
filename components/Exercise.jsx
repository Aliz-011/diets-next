import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Exercise = ({ data }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-full shadow-md px-4 py-6 rounded-md"
    >
      <Link href={`/exercises/${data.id}`}>
        <div className="text-center space-y-4">
          <picture>
            <img alt="imageGif" src={data.gifUrl} loading="lazy" />
          </picture>
        </div>
      </Link>
      <div className="flex gap-2">
        <button
          type="button"
          class="text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-orange-900"
        >
          {data.bodyPart}
        </button>
        <button
          type="button"
          className="text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-red-900"
        >
          {data.target}
        </button>
      </div>

      <Link href={`/exercises/${data.id}`}>
        <h2 className="mt-3 font-bold ml-6 capitalize text-xl">{data.name}</h2>
      </Link>
    </motion.div>
  );
};

export default Exercise;
