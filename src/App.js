import React, { Component } from 'react';
import Navbar from  './components/Navbar/Navbar'
import Home from './containers/Home/Home';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';
import PlayerCard from './containers/PlayerCard';
import StatsTable from './containers/Stats/StatsTable';
import Squad from './containers/Squad/Squad';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar/>
        <Route path='/' exact component={Home}/>
          <Squad/>
          <StatsTable/>
        </div>
      </BrowserRouter>    
    );
  }
}

export default App;
