import React, { Component } from "react";

class PlayerCard extends Component {
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
      <div className="PlayerCard">
        <div>
          <h3>{this.state.name}</h3>
        </div>
        <hr />
        <div className="cardImage">
          <p id="squadNumber">#{this.state.number}</p>
          <img
            className="image"
            src="https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png"
            alt='player'
          />
        </div>
        <hr />
        <div className="stats">
          <table>
            <tr className="statsCounted">
              <td>{this.state.stats[0].apps}</td>
              <td>{this.state.stats[0].goals}</td>
              <td>{this.state.stats[0].assists}</td>
              <td>{this.state.stats[0].motm}</td>
            </tr>
            <tr>
              <td>
                <i className="i far fa-check-square" />
              </td>
              <td>
                <i className="i fas fa-futbol" />
              </td>
              <td>
                <i className="i fas fa-at" />
              </td>
              <td>
                <i className="i fas fa-beer" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default PlayerCard;
