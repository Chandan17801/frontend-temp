import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Fetch suggestions based on the query (replace with your actual API call)
  const fetchSuggestions = async () => {
    // Simulate fetching suggestions from an API
    const fakeAPIResponse = [
      "Saree for Party",
      "Saree for Office",
      "Saree for weddings",
      "Saree for regular use",
    ];
    setSuggestions(
      fakeAPIResponse.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    fetchSuggestions();
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <input
        type="text"
        className="border p-2 rounded w-64 md:w-96"
        placeholder="Search for suggestions..."
        value={query}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className="mt-2 border rounded w-64 md:w-96">
          {suggestions.map((item, index) => (
            <li key={index} className="p-2 cursor-pointer hover:bg-gray-100">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
