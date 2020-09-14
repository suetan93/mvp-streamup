import React from 'react';

const ResultsEntry = (props) => {
  return (
    <div className="itemEntry" onClick={props.handleClick}>
      <div className="imgRow">
        <img className="poster" src={`${props.entry.picture}`} />
      </div>
      <div className="itemDetails">
        <div>
          {props.entry.name}
        </div>

      </div>
    </div>
  )
}

export default ResultsEntry;