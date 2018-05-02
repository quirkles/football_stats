import React, { Component } from "react";

class StatsTable extends Component {
  state = {
    number: 0,
    name: "",
    stats: [
      {
        apps: 0,
        goals: 0,
        assists: 0,
        motm: 0
      }
    ]
  };

  render() {
    return (
      
      <div className="statsTable">
      <p>This is the stats page</p>
        <table border="1px solid black">
          <tbody>
            <tr>
            <td>No.</td>
            <td>Name</td>
            <td>Apps</td>
            <td>Goals</td>
            <td>Assists</td>
            <td>MotM</td>
            </tr>
            
            {/* <!-- More categories possible - e.g Goal contributions, goals per game etc - perhaps under an advanced tab? --> */}
          <tr>
              <td> {this.state.number} </td>
              <td> {this.state.name} </td>
              <td> {this.state.stats[0].apps} </td>
              <td> {this.state.stats[0].goals} </td>
              <td> {this.state.stats[0].assists} </td>
              <td> {this.state.stats[0].motm} </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default StatsTable;
