import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Stats from "./containers/Stats/Stats";
import Team from "./containers/Team/Team";
import About from "./components/About/About";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Landing} />
          <Route path="/home/" exact component={Home} />
          <Route path="/team" exact component={Team} />
          <Route path="/stats" exact component={Stats} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={SignUp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
