import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <div className="w-70 flex rounded shadow-md max-w-md mx-auto my-6">
      <input
        type="text"
        placeholder="Search for skills e.g. HTML, React, MongoDB ..."
        value={searchTerm}
        onChange={handleSearch}
        className="py-2 px-4 rounded-l-full flex-grow focus:outline-none"
      />
      <button className="flex items-center justify-center w-12 bg-darkgreen text-beige rounded-r">
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;