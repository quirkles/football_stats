import React, {Component} from 'react';
import './PlayerCard.css';

class PlayerCard extends Component {
    state = {
        number: '#0',
        name: 'XX',
        image: '',
        apps: 0,
        goals: 0,
        assists: 0,
        motm: 0
    }

    render () {
        return (
            <div className='PlayerCard'>
                <p>{this.state.number}</p>
                <h1>{this.state.name}</h1>
                <p>Apps: {this.state.apps}</p>
                <p>Goals: {this.state.goals}</p>
                <p>Assists: {this.state.assists}</p>
                <p>Motm: {this.state.motm}</p>
            </div> 
        )}
    }


export default PlayerCard;