import React, { useState } from 'react';
import Fetchdata from '../hooks/fetchData';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = async () => {
    if (searchInput) {
      const response = await Fetchdata(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.SPOONACULAR_API_KEY}&timeFrame=day&targetCalories=2000&exclude=olives`
      );
      console.log(response);
    }
  };
  return (
    <div className="flex items-center md:border-2 rounded md:shadow-sm bg-white">
      <input
        type="text"
        className="pl-3 w-96 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
        placeholder="Search what exercise you're looking for..."
        value={searchInput}
        onChange={({ target }) => setSearchInput(target.value.toLowerCase())}
      />
      <button
        onClick={handleSearch}
        className="hidden md:inline-flex p-2 rounded-sm transition-all ease-out duration-150 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 cursor-pointer"
      >
        <BiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
