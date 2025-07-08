import React from "react";
import "./SearchBar.css";

const SearchBar = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <input
      type="text"
      placeholder="Search by name, email, or body"
      value={search}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
