import React from 'react';

const ResultsEntry = (props) => {

  const handleClick = (e) => {
  props.handleSelect(e.target.id)
}

  return (
    <div className="itemEntry" onClick={handleClick} id={props.index}>
      <div className="imgRow">
        <img className="poster" src={`${props.entry.picture}`} id={props.index} />
      </div>
      <div className="itemDetails" id={props.index}>
        <div id={props.index}>
          {props.entry.name}
        </div>

      </div>
    </div>
  )
}

export default ResultsEntry;