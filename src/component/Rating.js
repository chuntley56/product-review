import React, { Component } from 'react';
import Stars from './Stars.js';

class Rating extends Component {
  render() {
    const { ratingAvg } = this.props;
    return (
      <div className="ratingBox">
        <span className="rating">{ratingAvg}</span>
        <p>Out of 5</p>
        <Stars rating={ratingAvg} />
      </div> )
  }
}

export default Rating;
