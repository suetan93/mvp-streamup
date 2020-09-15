import React from 'react';
import Platforms from './Platforms.jsx';

const Modal = (props) => {
  return (
    <div className="displayEntry">
      <div align="right">
        <button onClick={props.closeModal}> &nbsp;X&nbsp; </button>
      </div>
      <div className="selectTitle">
        <br/>
        <b>{props.selected.name} ({props.selectedInfo.Year})</b>
      </div>
      <div>
        <br />
        <b>Plot:</b> {props.selectedInfo.Plot}
        <br /><br />
        <b>Cast:</b> {props.selectedInfo.Actors}
        <br /><br />
        <b>Runtime:</b> {props.selectedInfo.Runtime}
      </div>
      <div>
        <h3><i>Watch on:</i></h3>
      </div>
      <div>
        {props.selected.locations.map((platform, index) => (<Platforms key={index} platform={platform} />))}
      </div>
    </div>
  )
}

export default Modal;
