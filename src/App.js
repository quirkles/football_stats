import React, { Component } from 'react';
import Navbar from  './components/Navbar/Navbar'
import UpdatePlayer from './components/Player/UpdatePlayer';
import Home from './components/Home/Home';
import {BrowserRouter} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename='/'>
        <div className="App">
          <Home/>
            <Navbar/>
          <UpdatePlayer/>
        </div>
      </BrowserRouter>    
    );
  }
}

export default App;
