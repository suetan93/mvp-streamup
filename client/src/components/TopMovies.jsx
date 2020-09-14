import React, { useState, useEffect } from 'react';
import MovieEntry from './MovieEntry.jsx'

let sampleMovies = [
  {title: 'Moana', ratings: 4.5, image: 'https://mvp-stream.s3-us-west-1.amazonaws.com/noposter.jpeg'},
  {title: 'Aladdin', ratings: 4.0, image: 'https://mvp-stream.s3-us-west-1.amazonaws.com/noposter.jpeg'},
  {title: 'Coco', ratings: 4.2, image: 'https://mvp-stream.s3-us-west-1.amazonaws.com/noposter.jpeg'},
  {title: 'Mulan', ratings: 4.3, image: 'https://mvp-stream.s3-us-west-1.amazonaws.com/noposter.jpeg'}
];

const Movies = (props) => {
  const [ movies, setMovies ] = useState([]);

  useEffect (() => {setMovies(sampleMovies)});

  return (
    <div className="movies">
      <div className="sectionHeader">
        TOP MOVIES
      </div>
      <div className="movieRow">
        {movies.map(entry => (<MovieEntry key= {entry.title} entry={entry} />))}
      </div>
    </div>
  )
}

export default Movies;