import React, { useState, useEffect } from 'react';
import MovieEntry from './MovieEntry.jsx'

let sampleResults = [
  {title: 'Up', ratings: 4.5, image: 'https://mvp-stream.s3-us-west-1.amazonaws.com/noposter.jpeg'},
  {title: 'Toy Story', ratings: 4.0, image: 'https://mvp-stream.s3-us-west-1.amazonaws.com/noposter.jpeg'},
  {title: 'Beauty and the Beast', ratings: 4.2, image: 'https://mvp-stream.s3-us-west-1.amazonaws.com/noposter.jpeg'},
  {title: 'Frozen', ratings: 4.3, image: 'https://mvp-stream.s3-us-west-1.amazonaws.com/noposter.jpeg'}
];

const SearchResults = (props) => {
  const [ results, setResults ] = useState([]);

  useEffect (() => {setResults(sampleResults)});

  return (
    <div className="results">
      <div className="sectionHeader">
        Results
      </div>
      <div className="movieRow">
        {results.map(entry => (<MovieEntry key= {entry.title} entry={entry} />))}
      </div>
    </div>
  )
}

export default SearchResults;