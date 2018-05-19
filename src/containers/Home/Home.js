import React, { Component } from 'react';
import classes from './Home.module.css';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://www.sportbuzzbusiness.fr/wp-content/uploads/2018/02/arsenal-emirates-sponsor-maillot-2024.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: 'http://e0.365dm.com/18/03/16-9/20/skysports-granit-xhaka-arsenal_4256648.jpg?20180315215059',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'http://d3nfwcxd527z59.cloudfront.net/content/uploads/2017/05/12092334/Thierry-Henry-Robert-Pires-Sol-Campbell-Arsenal-2002.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}>
          <img 
            className={classes.caroImageBox + ' ' + classes.caroImage} 
            src={item.src} 
            alt={item.altText} />
          <CarouselCaption 
            captionText={item.caption} 
            captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        className={classes.carouselBox}
        interval={7000}
        pause={'hover'}
      >
        <CarouselIndicators 
          className={classes.indicators}
          items={items} 
          activeIndex={activeIndex} 
          onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl 
          className={classes.arrow} 
          direction="prev" 
          directionText="Previous" 
          onClickHandler={this.previous} />
        <CarouselControl 
          className={classes.arrow} 
          direction="next" 
          directionText="Next" 
          onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default Home;