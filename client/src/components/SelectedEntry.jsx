import React from 'react';
import Platforms from './Platforms.jsx';

const SelectedEntry = (props) => {
  return (
    <div className="displayEntry">
      Available on:
      <br />
      {props.selected.locations.map((platform, index) => (<Platforms key={index} platform={platform} />))}
    </div>
  )
}

export default SelectedEntry;
