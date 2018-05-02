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
        <p>Stats table here</p>
        <table border="1px solid black">
          <thead>
            <td> Player Number </td>
            <td> Player Name </td>
            <td> Appearances</td>
            <td> Goals </td>
            <td> Assists </td>
            <td> Man of the Match </td>
            {/* <!-- More categories possible - e.g Goal contributions, goals per game etc - perhaps under an advanced tab? --> */}
          </thead>
          <tbody>
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
