import React, {Component} from 'react';

class Player extends Component {
    state = {
        number: 99,
        name: 'Player',
        apps: 17,
        goals: 12,
        assists: 9,
        motm: 0
    }

    updateStatsHandler () {

    }

    render() {
        return (
            <div className='PlayerCard'>
                <div>
                    <h1>{this.state.name}</h1>
                </div>
            <hr />
                <div className='cardImage'>
                    <p id='squadNumber'>#{this.state.number}</p>
                    <img className='image' src='https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png'/>
                </div>        
            <hr />
                <div className='stats'>
                <table>
                    <tr className='statsCounted'>
                        <td>{this.state.apps}</td>
                        <td>{this.state.goals}</td>
                        <td>{this.state.assists}</td>
                        <td>{this.state.motm}</td>
                    </tr>
                    <tr>
                        <td><i className="i far fa-check-square"></i></td>
                        <td><i className="i fas fa-futbol"></i></td>
                        <td><i className="i fas fa-at"></i></td>
                        <td><i className="i fas fa-beer"></i></td>
                    </tr>
                </table>
                </div>
            </div>
        )
    }
}

export default Player;