/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterSection = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDateChange = (date) => {
    setStartDate(date);
    onDateChange(date);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col bg-white p-2 shadow-lg rounded-md w-64 h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Search for events</h1>

      {/* Date Filter */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">When?</h2>
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          inline
          className="w-full border border-gray-300 rounded-md"
        />
      </div>

      {/* Location Filter */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Where?</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Location"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
        />
      </div>

      {/* Event Name Filter */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">What?</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Event name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
        />
      </div>
    </div>
  );
};

export default FilterSection;
