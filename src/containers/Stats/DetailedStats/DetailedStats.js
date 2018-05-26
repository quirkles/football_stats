import React, { Component } from "react";
import classes from './DetailedStats.module.css';
import Aux from '../../../hoc/Auxiliary';

class DetailedStats extends Component {

  render() {
    const data = this.props.data;
    const id = this.props.id - 1;
    if (this.props.id) {
      return (
        <Aux>
          <h3>{data[id].name}</h3>
          <div className={classes.cardImage}>
            <p className={classes.squadNumber}>{data[id].number}</p>
            <img
              className={classes.image}
              src="https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png"
              alt="player"
            />
          </div>
          <div>
            <p>Apps: {data[id].apps}</p>
            <p>Goals: {data[id].goals}</p>
            <p>Assists: {data[id].assists}</p>
            <p>Motm: {data[id].motm}</p>
          </div>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </Aux>
      );
    }
    return null;

  }
}
export default DetailedStats;
