import React, {Component} from 'react';
import StatsTable from './StatsTable/StatsTable';
import PlayerCard from './PlayerStats/PlayerCard';

class Stats extends Component {
  render () {
    return (
      <div>
      <StatsTable />
      <PlayerCard />
    </div> 
    )
    
  }
}

export default Stats;