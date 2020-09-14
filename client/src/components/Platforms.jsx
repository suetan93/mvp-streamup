import React from 'react';

const Platforms = (props) => {
  return (
    <div className="platforms">
      <a href={`${props.platform.url}`} target="_blank"><img src={`${props.platform.icon}`} /></a>
    </div>
  )

}

export default Platforms;