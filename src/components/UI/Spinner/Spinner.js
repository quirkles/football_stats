import React from 'react';
// import Spinner from 'react-spinkit';
import Aux from '../../../hoc/Auxiliary';
import classes from './Spinner.module.css';

const spinner = () => {
  return (
    <Aux>
      <div className={classes.Loader}>Loading...</div>
    </Aux>
  )
}

export default spinner;



