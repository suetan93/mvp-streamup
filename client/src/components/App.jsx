import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import Movies from './TopMovies.jsx';
import SearchResults from './SearchResults.jsx';

const App = () => {
  const [ displayHome, setHome ] = useState(true);
  const [ searchResults, setSearchResults ] = useState([]);


  const hideHome = () => {
    setHome(false)
  }

  const showHome = () => {
    setHome(true);
    setSearchResults([]);
  }


  const getSearchResults = (title) => {
    axios.get('/search', {params: {title: title}})
      .then(resp => {setSearchResults(resp.data.results)})
      .catch(console.log)
  }

  return (
    <div className="main">
      <h1>STREAMUP</h1>
      <div className="body">
        {displayHome ? <SearchBar changeHome={hideHome} getSearchResults={getSearchResults}/> : <button onClick={showHome}> back </button>}
        <br />
        {!displayHome ? <SearchResults results={searchResults} /> : null}
      </div>
    </div>
  )

}

export default App;