import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useHttpClient } from "@/hooks/http-hook";

const Suggestions = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { sendRequest } = useHttpClient();

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

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]); // Clear suggestions when a suggestion is clicked
  };

  const onSearchHandler = async (event) => {
    event.preventDefault();
    try {
      const responseData = await sendRequest(
        "/products/get_all_Products",
        "get"
      );
      let temp = [];
      for (let i = 0; i < data.length; i++) {
        if (i == 5) break;
        temp.push(data[i]);
      }
      setProducts(temp);
    } catch (err) {}
  };

  return (
    <div className="relative flex justify-center xl:mt-[5rem] mt-[4.7rem] items-center">
      <input
        type="text"
        className="search-gradient xl:w-[30rem] w-[15rem] h-[2.5rem] px-[0.5rem] rounded-md"
        placeholder="Search for products, brands and more"
        value={query}
        onChange={handleInputChange}
      />
      <AiOutlineSearch
        className="w-10 h-10 border-black border rounded-md absolute right-0 bg-white cursor-pointer hover:scale-105 transition-all duration-700"
        onClick={onSearchHandler}
      />

      {suggestions.length > 0 && (
        <div className="absolute w-full mt-20 border rounded bg-white shadow-md top-0 left-0">
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Suggestions;
