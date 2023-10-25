import React, { useState } from 'react';
import rightArrow from "../assets/images/icon-arrow.svg"

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Enter IP Address or Domain"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-96 px-5 border rounded-s-xl h-12"
      />
      <button
        onClick={handleSearch}
        className="bg-black text-white px-4 rounded-r-xl h-12"
      >
        <img src={rightArrow} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
