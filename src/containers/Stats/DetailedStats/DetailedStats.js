import React, { Component } from "react";
import {Button} from 'reactstrap';
import classes from './DetailedStats.module.css';
import Aux from '../../../hoc/Auxiliary';

class DetailedStats extends Component {

  render() {
    const data = this.props.data;
    const id = this.props.id - 1;
    if (this.props.id) {
      return (
        <Aux>
          <div className={classes.DetailedStatsContainer}>
            <h3>{data[id].name}</h3>
            {/* image and number */}
              <div className={classes.cardImage}>
                <p className={classes.squadNumber}>{data[id].number}</p>
                  <img
                    className={classes.image}
                    src="https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png"
                    alt="player"
                  />
              </div>
            {/* basic stats */}
            <hr />
              <div className={classes.basicStats}>
                <table className={classes.table}>
                  <thead>
                    <td>Apps</td>
                    <td>Goals</td>
                    <td>Assists</td>
                    <td>MVP</td>
                  </thead>
                  <tbody>
                    <td>{data[id].apps}</td>
                    <td>{data[id].goals}</td>
                    <td>{data[id].assists}</td>
                    <td>{data[id].motm}</td>
                  </tbody>
                </table>
              </div>
            <hr/>
          <div className={classes.buttons}>
            <Button color="warning"><i className="fas fa-edit"></i></Button>
            <Button color="danger"><i className="fas fa-trash"></i></Button>
          </div>
          </div>  
        </Aux>
      );
    }
    return null;

  }
}
export default DetailedStats;
