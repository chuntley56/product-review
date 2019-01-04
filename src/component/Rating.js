import React, { Component } from 'react';
import Stars from './Stars.js';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="ratingBox">
        <span className="rating">{rating}</span>
        <p>Out of 5</p>
        <Stars rating={rating} />
      </div> )
  }
}

export default Rating;
