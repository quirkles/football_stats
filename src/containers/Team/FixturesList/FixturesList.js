import React, {Component} from 'react';
import Fixture from '../Fixture/Fixture';

class FixturesList extends Component {
  render () {
    return (
      <div>
      <h1>List of fixtures here</h1>
      <Fixture />
    </div>
    )
  }
}

export default FixturesList;