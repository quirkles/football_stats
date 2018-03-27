import React, { Component } from 'react';
import Navbar from  '../components/Navbar/Navbar'
import UpdatePlayer from '../components/Player/UpdatePlayer';
import Home from '../components/Home/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Navbar/>
        <UpdatePlayer/>
        <UpdatePlayer/>
        <UpdatePlayer/>
        <UpdatePlayer/>
        <UpdatePlayer/>
        <UpdatePlayer/>
        <UpdatePlayer/>
        <UpdatePlayer/>
        <UpdatePlayer/>
      </div>
    );
  }
}

export default App;
