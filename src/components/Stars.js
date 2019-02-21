import React, { Component } from 'react';
import styled from 'styled-components';

export default ({ rating }) => {
    let stars = [];
    const starHalfWidth = ((rating - Math.floor(rating)) * 25).toFixed(0);
    const StarHalf = styled.span`
        ::after{
        width: ${starHalfWidth}px;
      }`;

    const renderStars = (rating) => {
      for (let i = 0; i < (rating - 1); i++) {
        stars.push(<span className="star on"></span>)
      } stars.push(<StarHalf className="star half"/>)
      while (stars.length < 5){
        stars.push(<span className="star"></span>)
      } return stars;}

    return (
      <div className="stars">
        {renderStars(rating)}
      </div> )}
