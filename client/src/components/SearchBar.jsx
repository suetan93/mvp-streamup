import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {
  const [search, onSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    props.changeHome();
    console.log(search)
  }

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
      <input className="searchBox" type="text" placeholder="Search movie or show" value={search} onChange={e => onSearch(e.target.value)} />
      <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default SearchBar;