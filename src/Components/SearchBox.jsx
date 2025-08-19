import React, { useState } from "react";

function SearchBox({ onSearch,  }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) {
      alert("Please enter a city name!");
      return;
    }
    onSearch(city);
    setCity(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 justify-center ">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded w-64 dark:text-white border-black dark:border-gray-700"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
      <button
        type="button"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => setCity('')}
      >
       Reset
      </button>
    </form>
  );
}

export default SearchBox;
