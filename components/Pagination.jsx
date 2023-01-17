import React, { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { useStateValue, actionType } from '../context/Store';

const Pagination = ({
  dataLimit,
  setCurrentPage,
  currentPage,
  indexOfLastExercise,
  indexOfFirstExercise,
}) => {
  const [{ exercises }, dispatch] = useStateValue();
  const [pages, setPages] = useState(Math.round(exercises.length / dataLimit));

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(exercises.length / dataLimit); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{' '}
        <span className="font-semibold text-gray-900">
          {indexOfFirstExercise === 0
            ? indexOfFirstExercise + 1
            : indexOfFirstExercise + 1}
        </span>{' '}
        to{' '}
        <span className="font-semibold text-gray-900">
          {currentPage === pageNumbers.length
            ? exercises.length
            : indexOfLastExercise}
        </span>{' '}
        of{' '}
        <span className="font-semibold text-gray-900">{exercises.length}</span>{' '}
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={goToPreviousPage}
          className={`inline-flex gap-1 items-center px-4 py-2 font-medium text-black border bg-white rounded-l hover:bg-gray-100 ${
            currentPage === 1
              ? 'pointer-events-none shadow-none cursor-none bg-gray-300'
              : ''
          }`}
        >
          <BiLeftArrowAlt className="text-xl" />
          <span className="text-sm text-gray-700">Prev</span>
        </button>
        {pageNumbers.map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`px-3 border hover:bg-gray-100 ${
              currentPage === item ? 'active' : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className={`inline-flex gap-1 items-center px-4 py-2 font-medium text-black border bg-white rounded-r hover:bg-gray-100 ${
            currentPage === pages
              ? 'pointer-events-none shadow-none cursor-none bg-gray-300'
              : ''
          }`}
        >
          <span className="text-sm">Next</span>
          <BiRightArrowAlt className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
