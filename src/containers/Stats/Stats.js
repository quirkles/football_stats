import React, { Component } from 'react';
import StatsTable from './StatsTable/StatsTable';
import PlayerCard from './PlayerStats/PlayerCard';
import axios from 'axios';
import PlayerInfo from '../../components/Player/PlayerInfo';

class Stats extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({ data: response.data })
        console.log(response);
      })
  }
  render() {
    const playerData = this.state.data.map(player => {
      return <PlayerInfo name={player.name} id={player.id} address={player.address.street} key={player.id} />
    }

    );
    return (
      <div>
        <StatsTable />
        <PlayerCard />
        {playerData}

      </div>
    )

  }
}

export default Stats;