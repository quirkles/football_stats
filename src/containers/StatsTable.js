import React, {Component} from 'react';

class StatsTable extends Component {
  state = {
      number: 0,
      name: '',
      stats: [
          {
          apps: 0,
          goals: 0,
          assists: 0,
          motm: 0
          }
      ]  
  }

  render() {
      return (
          <div className='statsTable'>
            <p>Stats table here</p>
            {/* Stats table goes here. It should render automatically. */}
          </div>
      )
  }
}

export default StatsTable;