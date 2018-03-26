import React, {Component} from 'react';
import './PlayerCard.css';

class PlayerCard extends Component {
    state = {
        number: '#0',
        name: 'XX',
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
                
                <img className='image' src='https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png'/>

                <div className='stats'>
                    <p> Apps: {this.state.apps} </p>
                    <p> Goals: {this.state.goals} </p>
                    <p> Assists: {this.state.assists} </p>
                    <p> Motm: {this.state.motm} </p>
                </div>
                
            </div>
        )}
    }


export default PlayerCard;