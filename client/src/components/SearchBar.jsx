import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {
  const [search, onSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) {
      alert('Search field empty')
    } else {
      props.changeHome();
      props.getSearchResults(search.toLowerCase())
    }
  }

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
      <input className="searchBox" type="text" placeholder="Search movie or show" value={search} onChange={e => onSearch(e.target.value)} />
      &nbsp;
      <button className="searchBttn">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
          <g fill="none">
            <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
            </path>
            </g>
        </svg>
      </button>
      </form>
    </div>
  )
}

export default SearchBar;