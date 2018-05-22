import React from 'react';
import classes from './Button.module.css';


const button = () => {
  return (
    <div>
      <button className={classes.addButton}>Add new player</button>
    </div>
  )
}

export default button;