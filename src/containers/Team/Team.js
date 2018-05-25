import React, {Component} from 'react';
import FixtureList from '../Team/FixturesList/FixturesList';
import AddMatchForm from '../../components/Forms/AddMatchForm/AddMatchForm';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary';
class Team extends Component {
  render () {
    return (
      <Aux>
        <button>Add fixture</button>
        <FixtureList />
        <AddMatchForm />
        <Spinner />
      </Aux>
     
    )
  }
}

export default Team;