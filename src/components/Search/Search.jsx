import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([
    "Saree",
    "Western dress",
    "Office wear",
  ]);

  const handleInputChange = (event) => {
    const value = event.target.value;

    setQuery(value);
  };
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    onSearch(suggestion); // Trigger the search when suggestion is clicked
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center justify-center mt-20"
    >
      <div className="relative flex items-center">
        <AiOutlineSearch className="absolute left-0 pl-3 text-gray-700 text-2xl" />
        <input
          type="text"
          placeholder="Search..."
          className="py-2 pl-8 pr-4 border border-gray-300 rounded-l-lg focus:outline-none"
          value={query}
          onChange={handleInputChange}
          list="suggestionsList"
        />
        <datalist id="suggestionsList">
          {suggestions.map((suggestion, index) => (
            <option key={index} value={suggestion} />
          ))}
        </datalist>
      </div>

      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-r-lg focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
