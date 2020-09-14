import React from 'react';

const MovieEntry = (props) => {
  return (
    <div className="itemEntry">
      <div className="imgRow">
        <img className="poster" src={`${props.entry.image}`} />
      </div>
      <div className="itemDetails">
        <div>
          {props.entry.title}
        </div>
        <div>
        {props.entry.ratings}
        </div>
      </div>
    </div>
  )
}

export default MovieEntry;