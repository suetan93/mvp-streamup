import React, { useState, useEffect } from 'react';
import MovieEntry from './MovieEntry.jsx';
import ResultsEntry from './ResultsEntry.jsx';
import SelectedEntry from './SelectedEntry.jsx';

const SearchResults = (props) => {
  const [ results, setResults ] = useState([]);
  const [ select, setSelect ] = useState(null);
  const [ showEntry, setEntry ] = useState(false);

  useEffect (() => {setResults(props.results)});

  const handleSelect = (index) => {
    setSelect(results[index]);
    setEntry(true);
  }

  const closeModal = () => {
    setEntry(false);
  }

  return (
    <div>
      <div className="results">
        <div className="sectionHeader">
          Results
        </div>
        <div className="searchRow">
          {results.map((entry, index) => (<ResultsEntry key={index} entry={entry} index={index} handleSelect={handleSelect} />))}
        </div>
      </div>
      {showEntry ? <div className="grayOut" /> : null}
      {showEntry ? <SelectedEntry selected={select} closeModal={closeModal} /> : null }
    </div>
  )
}

export default SearchResults;