import React, { Component } from 'react';

class Review extends Component {
  render(){
    const { data } = this.props;
    return(
      <div className="reviewSingle">
        <h4>{data.name}</h4>
        <span>{data.date}</span><br />
        <span>{data.rating}</span>
        <p>{data.description}</p>
      </div>
    )
  }
}

export default Review;
