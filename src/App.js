import React, { Component } from 'react';
import Navbar from  './components/Navbar/Navbar'
import Home from './containers/Home/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import PlayerCard from './containers/PlayerCard';
import StatsTable from './containers/Stats/StatsTable';
import Squad from './containers/Squad/Squad';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar/>
        <Route path='/' exact component={Home}/>
        <Route path='/squad' exact component={Squad}/>
        <Route path='/stats' exact component={StatsTable}/>
        <Route path='/about' exact component={About}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' exact component={SignUp}/>
        </div>
      </BrowserRouter>    
    );
  }
}

export default App;
