import React, {Component} from "react";
import classes from './DetailedStats.module.css';
import Aux from '../../../hoc/Auxiliary';

class detailedStats extends Component {

render() {
  return (
    <Aux>
      <h3>Name:</h3>
      <div className={classes.cardImage}>
        <p className={classes.squadNumber}>#00</p>
        <img
          className={classes.image}
          src="https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png"
          alt="player"
        />
      </div>
      <button>Edit</button>
        <button>Delete</button>
    </Aux>
  );
}
}
export default detailedStats;
