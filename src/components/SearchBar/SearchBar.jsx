//import SearchBar.css
import "./SearchBar.css";
import React, { useState } from "react";

const SearchBar = (props) => {
  const { onSearch } = props;
  const [term, setTerm] = useState("");
  
  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };
  const handleSearch = () => {
    onSearch(term);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
      />
      <button className="SearchButton" onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
