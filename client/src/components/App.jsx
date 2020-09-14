import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import Movies from './TopMovies.jsx';
import SearchResults from './SearchResults.jsx';

const App = () => {
  const [ displayHome, hideHome ] = useState(true);

  const changeHome = () => {
    hideHome(!displayHome)
  }

  return (
    <div className="main">
      <h1>streamUP!</h1>
      <div className="body">
        {displayHome ? <SearchBar homeState={displayHome} changeHome={changeHome} /> : null}
        <br />
        {displayHome ? <Movies /> : null}
        <br />
        <SearchResults />
      </div>
    </div>
  )

}

export default App;