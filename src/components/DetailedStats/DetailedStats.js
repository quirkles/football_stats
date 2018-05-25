import React from "react";
import classes from './DetailedStats.module.css';
import Aux from '../../hoc/Auxiliary';

const detailedStats = (props) => {
// const statsSummary = Object.keys(props.stats)
//   .map(statKey => {
//     return <li key={statKey}>{statKey}: {props.stats[statKey]}</li>
//   })
// const playerDetailsSummary = Object.keys(props.playerDetails)

    return (
      <Aux>
          <h3>{props.name}</h3>


        <div className={classes.cardImage}>
          <p className={classes.squadNumber}>#00</p>
          <img
            className={classes.image}
            src="https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png"
            alt="player"
          />
          <ul>
              {/* {statsSummary} */}
          </ul>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </Aux>
      
    );
  }
export default detailedStats;
