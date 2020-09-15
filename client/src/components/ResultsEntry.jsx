import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResultsEntry = (props) => {
  const [ info, setInfo ] = useState(null)

  const handleClick = (e) => {
    props.handleSelect(e.target.id)
  }

  const getPoster = (id) => {
    axios.get('/poster', {params: {id: id}})
    .then(results => {setInfo(results.data)})
    .catch(console.log)
  }

  const imdb = props.entry.external_ids.imdb.id;
  useEffect (() => {getPoster(imdb)});

  return (
    <div className="itemEntry" onClick={handleClick} id={props.index}>
      <div className="imgRow">
        {info ? <img className="poster" src={`${info.img}`} onerror={if (this.src != 'error.jpg') this.src = 'error.jpg'} id={props.index} /> : null}
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