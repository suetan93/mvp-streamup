import React from 'react';

const Platforms = (props) => {
  return (
    <a href={`${props.platform.url}`} target="_blank">
      <div className="platforms">
        <img src={`${props.platform.icon}`} />
      </div>
    </a>
  )

}

export default Platforms;