import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <div className="w-full max-w-xl mx-auto my-10">
      <div className="relative group">
        <FaSearch
          className="absolute left-5 top-1/2 -translate-y-1/2 
          text-green group-focus-within:text-darkgreen transition-colors"
          aria-hidden="true"
        />

        <input
          id="project-search"
          type="search"
          placeholder="Search for skill, e.g. LLM, React, MongoDB..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full bg-white/70 border border-darkmint/70
          rounded-full py-4 pl-12 pr-5
          font-nunito text-darkgreen placeholder:text-gray-400
          shadow-sm transition-all duration-200
          hover:border-green
          focus:outline-none focus:border-darkgreen
          focus:ring-2 focus:ring-darkmint/50"
        />
      </div>
    </div>
  );
}

export default SearchBar;
