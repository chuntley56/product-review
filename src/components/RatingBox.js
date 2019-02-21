import React, { Component } from 'react';
import Stars from './Stars';

export default ({ rating }) => {
    return (
      <section className="rating">
        <span className="rating-total">{rating}</span>
        <p>out of 5</p>
        <Stars rating={rating} />
      </section> )}
