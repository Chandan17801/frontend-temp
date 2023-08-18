import React, { useState } from "react";
import SearchBar from "@/components/Search/Search";

const SearchPage = () => {
  // Dummy data representing items to search through
  const dummyData = [
    { id: 1, title: "Product A" },
    { id: 2, title: "Product B" },
    { id: 3, title: "Service X" },
    { id: 4, title: "Service Y" },
    // ... add more items as needed
  ];

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Convert the query to lowercase for case-insensitive search
    const lowercaseQuery = query.toLowerCase();

    // Filter the dummy data based on the search query
    const filteredResults = dummyData.filter((item) =>
      item.title.toLowerCase().includes(lowercaseQuery)
    );

    console.log("Search Results:", filteredResults);
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default SearchPage;
