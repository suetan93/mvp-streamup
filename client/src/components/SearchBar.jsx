import React from 'react'

const SearchBar = (props) => {
  return (
    <div className="search">
      <input className="searchBox" type="text" placeholder="Search movie or show" />
      <button>Search</button>
    </div>
  )
}

export default SearchBar;