import React from 'react';
import Platforms from './Platforms.jsx';

const SelectedEntry = (props) => {
  return (
    <div className="displayEntry">
      <button onClick={props.closeModal}> X </button>
      <br />
      {props.selected.name}
      <br />
      Watch on:
      <br />
      {props.selected.locations.map((platform, index) => (<Platforms key={index} platform={platform} />))}
    </div>
  )
}

export default SelectedEntry;
