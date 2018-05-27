import React, { Component } from 'react';
// import classes from './Home.module.css';
import HomeCarousel from './Carousel/Carousel';
import Aux from '../../hoc/Auxiliary';


class Home extends Component {

  render() {
    return (
      <Aux>
        <HomeCarousel />
      </Aux>
    );
  }
}

export default Home;