import React, { Component } from 'react';
import StatsTable from './StatsTable/StatsTable';
import AddPlayerForm from '../../components/Forms/AddPlayerForm/AddPlayerForm';
import Aux from '../../hoc/Auxiliary';

class Stats extends Component {
  render() {
    return (
      <Aux>
        <StatsTable />
        <AddPlayerForm />
      </Aux>
    )

  }
}

export default Stats;