import React, {Component} from 'react';
import './UpdatePlayer.css';
import Player from '../../containers/Player';

const updatePlayer = () => {
    return (
        <Player />
    )
}

// class PlayerCard extends Component {
//     state = {
//         number: '#0',
//         name: '',
//         apps: 0,
//         goals: 0,
//         assists: 0,
//         motm: 0
//     }

//     render () {
//         return (
//             <div className='PlayerCard'>
//                 <
//                 <p>{this.state.number}</p>
//                 <h1>Name{this.state.name}</h1>
                
//                 <img className='image' src='https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png'/>

//                 <div className='stats'>
//                     <ul>
//                        <li>Apps: {this.state.apps}</li> 
//                        <li>Goals: {this.state.goals}</li> 
//                        <li>Assists: {this.state.assists}</li> 
//                        <li>Motm: {this.state.motm}</li> 
//                     </ul>
//                 </div>
                
//             </div>
//         )}
//     }


export default updatePlayer;