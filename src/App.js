import React, { Component } from 'react';
import Navbar from  './components/Navbar/Navbar'
import PlayerCard from './containers/PlayerCard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <PlayerCard />
      </div>
    );
  }
}

export default App;
