import React, {Component} from 'react';
import PlayerCard from '../PlayerCard';

class Squad extends Component {
  render () {
    return (
      <div>
         <PlayerCard />
         <PlayerCard />
         <PlayerCard />
        <p>This is the squad page</p>
      </div>
     
    )
  }
}

export default Squad;