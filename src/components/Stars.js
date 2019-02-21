import React, { Component } from 'react';
import styled from 'styled-components';

export default ({ rating }) => {
    let stars = [];
    const ratingFloor = Math.floor(rating);
    const starHalfWidth = ((rating - ratingFloor) * 25).toFixed(0);
    const StarHalf = styled.span`
        ::after{
        width: ${starHalfWidth}px;
      }`;

    const renderStars = (rating) => {
      if (rating > ratingFloor) {
        for (let i = 0; i < (rating - 1); i++) {
          stars.push(<span className="star on"></span>)
        } stars.push(<StarHalf className="star half"/>)
      } else {
        for (let i = 0; i < rating; i++) {
          stars.push(<span className="star on"></span>)
        }}
      while (stars.length < 5){
        stars.push(<span className="star"></span>)
      }
      return stars;}

    return (
      <div className="stars">
        {renderStars(rating)}
      </div> )}
