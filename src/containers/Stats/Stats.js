import React, { Component } from 'react';
import StatsTable from './StatsTable/StatsTable';
import AddPlayerForm from '../../components/Forms/AddPlayerForm/AddPlayerForm';
import Aux from '../../hoc/Auxiliary';
import Spinner from '../../components/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
// import PlayerCard from './PlayerStats/PlayerCard';
// import axios from 'axios';

class Stats extends Component {
  render() {
    return (
      <Aux>
        <Modal />
        <StatsTable />
        <AddPlayerForm />
        <Spinner />
      </Aux>
    )

  }
}

export default Stats;