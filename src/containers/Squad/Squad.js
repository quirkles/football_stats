import React, {Component} from 'react';
import PlayerCard from '../PlayerCard';

class Squad extends Component {
  render () {
    return (
      <div>
         <PlayerCard />
         <PlayerCard />
         <PlayerCard />
      </div>
     
    )
  }
}

export default Squad;