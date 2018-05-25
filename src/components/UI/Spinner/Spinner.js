import React from 'react';
import Spinner from 'react-spinkit';
import Aux from '../../../hoc/Auxiliary';
import classes from './Spinner.module.css';

const spinner = () => {
  return (
    <Aux>
      <Spinner name="double-bounce" color="#F1C40F" className={classes.Spinner}/>
      <p className={classes.loading}>please wait...</p>
    </Aux>
  )
}

export default spinner;



