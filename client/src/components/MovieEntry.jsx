import React from 'react';

const MovieEntry = (props) => {
  return (
    <div className="itemEntry">
      <div className="imgRow">
        <img className="poster" src={`${props.movie.image}`} />
      </div>
      <div className="itemDetails">
        <div>
          {props.movie.title}
        </div>
        <div>
        {props.movie.ratings}
        </div>
      </div>
    </div>
  )
}

export default MovieEntry;