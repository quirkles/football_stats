import React, { Component } from 'react';
import StatsTable from './StatsTable/StatsTable';
import PlayerCard from './PlayerStats/PlayerCard';
import axios from 'axios';

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
      .catch(error => {
        console.log(error);
      })
  }
  render() {

    // const statsTableData = this.state.data.map(player => {
    //   return <StatsTable />
    // })

    const playerData = this.state.data.map(player => {
      return <PlayerCard 
        name={player.name} 
        number={player.id} 
        address={player.address.street} 
        key={player.id} />
    });

    return (
      <div>
        <StatsTable />
          {playerData}
      </div>
    )

  }
}

export default Stats;