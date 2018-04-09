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
            <table border= "1px solid black">
		<thead>
			<th> Player Number </th>
            <th> Player Name </th>
			<th> Appearances</th>
			<th> Goals </th>
			<th> Assists </th>
			<th> Man of the Match </th>
{/* <!-- More categories possible - e.g Goal contributions, goals per game etc - perhaps under an advanced tab? --> */}
	</thead>
	<tr> 
		<td> {this.state.number} </td>
        <td> {this.state.name} </td>
		<td> {this.state.stats[0].apps} </td>
		<td> {this.state.stats[0].goals} </td>
		<td> {this.state.stats[0].assists} </td>
		<td> {this.state.stats[0].motm} </td>

	</tr>
	</table>
          </div>
      )
  }
}

export default StatsTable;