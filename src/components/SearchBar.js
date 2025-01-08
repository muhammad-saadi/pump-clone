import React from 'react';
import '../SearchBar.css';

const SearchBar = ({ searchTerm, handleSearch }) => {
  const handleClear = () => {
    handleSearch('');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for token"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="search-input"
      />
      <button onClick={handleClear} className="clear-button">
        Clear
      </button>
      <button onClick={() => handleSearch(searchTerm)} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
