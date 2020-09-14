import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import Movies from './TopMovies.jsx';

const App = () => {
  return (
    <div className="main">
      <h1>streamUP!</h1>
      <div className="body">
        <SearchBar />
        <br />
        <Movies />
      </div>
    </div>
  )

}

export default App;