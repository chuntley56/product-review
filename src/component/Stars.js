import React, { Component } from 'react';


class Stars extends Component {
  render() {
    const { rating } = this.props;

    return (
      <div className="stars">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </div> )
  }

  componentDidUpdate(){
    const { rating } = this.props;
    const ratingFloor = Math.floor(rating);
    const starHalfWidth = ((rating - Math.floor(rating)) * 25).toFixed(0);
    const stars = document.querySelectorAll('.stars span');
    const styleTag = document.head.appendChild(document.createElement("style"));
    styleTag.innerHTML = `.star.half:after{width:${starHalfWidth}px;}`;

    for(let i = 0; i < ratingFloor; i++) {
      stars[i].className += ' on';
    }
    stars[ratingFloor].className += ' half';
    }
  }

export default Stars;
