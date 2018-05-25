import React, { Component } from 'react';
import StatsTable from './StatsTable/StatsTable';
import AddPlayerForm from '../../components/Forms/AddPlayerForm/AddPlayerForm';
import Aux from '../../hoc/Auxiliary';
import Spinner from '../../components/UI/Spinner/Spinner';

class Stats extends Component {
  render() {
    return (
      <Aux>
        <StatsTable />
        <AddPlayerForm />
        <Spinner />
      </Aux>
    )

  }
}

export default Stats;