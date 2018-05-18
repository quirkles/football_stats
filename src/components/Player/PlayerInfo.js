import React from 'react';
import classes from './PlayerInfo.module.css';
const playerInfo = (props) => {
  return (
    <div>
      <p className={classes.PlayerInfo}>{props.name}</p>
      <p>{props.id} {props.address}</p>
    </div>
  )
}

export default playerInfo;