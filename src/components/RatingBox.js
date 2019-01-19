import React, { Component } from 'react';
import Stars from './Stars';

class RatingBox extends Component {
  render() {
    const { reviews } = this.props;

    const rating = (Math.round(reviews.reduce((total, { rating }) => rating + total, 0) / reviews.length * 10) / 10) || 5;

    return (
      <section className="rating">
        <span className="rating-total">{rating}</span>
        <p>Out of 5</p>
        <Stars rating={rating} />
      </section> )
  }
}

export default RatingBox;
