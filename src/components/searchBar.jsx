/* eslint-disable react/prop-types */
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    name: "",
    location: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = () => {
    onSearch(searchParams);
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Event Name */}
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Event Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={searchParams.name}
            onChange={handleInputChange}
            placeholder="Enter event name"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>

        {/* Location */}
        <div>
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={searchParams.location}
            onChange={handleInputChange}
            placeholder="Enter location"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={searchParams.date}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleSearch}
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark focus:outline-none"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
