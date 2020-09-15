import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResultsEntry = (props) => {
  const [ info, setInfo ] = useState(null)

  const handleClick = (e) => {
    e.preventDefault()
    props.handleSelect(e.target.id)
    props.getInfo(info)
  }

  const getPoster = (id) => {
    axios.get('/poster', {params: {id: id}})
    .then(results => {setInfo(results.data)})
    .catch(console.log)
  }

  const imdb = props.entry.external_ids.imdb.id;
  useEffect (() => {getPoster(imdb)}, []);

  return (
    <div className="itemEntry" onClick={handleClick} id={props.index}>
      <div className="imgRow">
        {info ? <img className="poster" src={`${info.Poster}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://mvp-stream.s3-us-west-1.amazonaws.com/noposter.jpeg"}} id={props.index} /> : null}
      </div>
      <div className="itemDetails" id={props.index}>
        <div id={props.index}>
          {props.entry.name} {info ? `(${info.Year})` : null}
        </div>
      </div>
    </div>
  )
}

export default ResultsEntry;