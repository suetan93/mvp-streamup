import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import Movies from './TopMovies.jsx';
import SearchResults from './SearchResults.jsx';

const App = () => {
  const [ displayHome, hideHome ] = useState(true);
  const [ searchResults, setSearchResults ] = useState([]);


  const changeHome = () => {
    hideHome(!displayHome)
  }

  const getSearchResults = (title) => {
    axios.get('/search', {params: {title: title}})
      .then(resp => {setSearchResults(resp.data.results)})
      .catch(console.log)
  }

  return (
    <div className="main">
      <h1>streamUP!</h1>
      <div className="body">
        {displayHome ? <SearchBar homeState={displayHome} changeHome={changeHome} getSearchResults={getSearchResults}/> : null}
        <br />
        {displayHome ? <Movies /> : null}
        <br />
        {searchResults.length > 0 ? <SearchResults results={searchResults} /> : null}
      </div>
    </div>
  )

}

export default App;