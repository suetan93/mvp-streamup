import React, { useState, useEffect } from 'react';
import MovieEntry from './MovieEntry.jsx'
import ResultsEntry from './ResultsEntry.jsx'

const SearchResults = (props) => {
  const [ results, setResults ] = useState([]);
  const [ select, setSelect ] = useState(null);

  useEffect (() => {setResults(props.results)});

  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <div className="results">
      <div className="sectionHeader">
        Results
      </div>
      <div className="movieRow">
        {results.map(entry => (<ResultsEntry key= {entry.id} entry={entry} handleCick={handleClick} />))}
      </div>
    </div>
  )
}

export default SearchResults;