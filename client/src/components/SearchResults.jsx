import React, { useState, useEffect } from 'react';
import MovieEntry from './MovieEntry.jsx';
import ResultsEntry from './ResultsEntry.jsx';
import Modal from './Modal.jsx';
import { Spinner } from 'react-bootstrap';

const SearchResults = (props) => {
  const [ results, setResults ] = useState([]);
  const [ select, setSelect ] = useState(null);
  const [ showEntry, setEntry ] = useState(false);
  const [ selectedInfo, setSelectedInfo ] = useState(null);

  useEffect (() => {setResults(props.results)});

  const handleSelect = (index) => {
    setSelect(results[index]);
    setEntry(true);
  }

  const closeModal = () => {
    setEntry(false);
  }

  const getSelectedInfo = (data) => {
    setSelectedInfo(data);
  }

  return (
    <div>
      <div className="results">
        <div className="sectionHeader">
          {results.length > 0 ? 'Results' : <div><img src="https://mvp-stream.s3-us-west-1.amazonaws.com/spinner.gif" style={{width: 15, height: 15}} /> Searching...</div> }
        </div>
        <br />
        <div className="searchRow" align="center">
          {results.map((entry, index) => (<ResultsEntry key={index} entry={entry} index={index} handleSelect={handleSelect} getInfo={getSelectedInfo} />))}
        </div>
      </div>
      {showEntry ? <div className="grayOut" onClick={closeModal}/> : null}
      {showEntry ? <Modal selected={select} selectedInfo={selectedInfo} closeModal={closeModal} /> : null }
    </div>
  )
}

export default SearchResults;