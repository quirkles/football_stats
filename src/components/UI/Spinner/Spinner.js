import React from 'react';
import Spinner from 'react-spinkit';
import classes from './Spinner.module.css';

const spinner = () => {
  return (
    <Spinner name="double-bounce" color="#F1C40F" className={classes.Spinner}/>
  )

}

export default spinner;



