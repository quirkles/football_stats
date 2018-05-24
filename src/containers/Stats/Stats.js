import React, { Component } from 'react';
import StatsTable from './StatsTable/StatsTable';
import AddPlayer from '../../components/Forms/AddPlayerForm/AddPlayer';
// import PlayerCard from './PlayerStats/PlayerCard';
// import axios from 'axios';

class Stats extends Component {
  state = {
    data: []
  }

  render() {

    return (
      <div>
        <StatsTable />
        <AddPlayer />
      </div>
    )

  }
}

export default Stats;