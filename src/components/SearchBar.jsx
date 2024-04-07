import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <div className="w-70 flex rounded shadow-md max-w-md mx-auto my-6">
      <input
        type="text"
        placeholder="Search for e.g. HTML, React, MongoDB ..."
        value={searchTerm}
        onChange={handleSearch}
        className="py-2 px-4 rounded-l-full flex-grow focus:outline-none"
      />
      <button className="flex items-center justify-center w-12 bg-blue-500 text-white rounded-r-full">
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;