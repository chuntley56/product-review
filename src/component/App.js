import React, { Component } from 'react';
import Rating from './Rating.js';
import Form from './Form.js';
import Dropdown from './Dropdown.js';

class App extends Component {
constructor(props){
  super(props);

  this.state = {
    reviews: [],
    order: "new"
  }
}

componentDidMount() {
  fetch('./data.json')
    .then(response => response.json())
    .then(data => { this.setState({ reviews: data.reviews })});
}

sortBy = event => {
  this.setState({
    order: event.target.value
  }, () => {
    this.sortReviews()
  })
}

sortReviews() {
  const { reviews, order } = this.state;

  if (order === 'old') {
    reviews.sort((a, b) => a.date.localeCompare(b.date));}
  else if (order === 'new') {
    reviews.sort((a, b) => b.date.localeCompare(a.date));}
  else if (order === 'low') {
    reviews.sort((a, b) => a.rating - b.rating);}
  else if (order === 'high') {
    reviews.sort((a, b) => b.rating - a.rating);}

  this.setState({
    reviews: reviews
  })
}

render() {
const { reviews } = this.state;
const rating = Math.round(reviews.reduce((total, { rating }) => rating + total, 0) / reviews.length * 10) / 10;

const reviewSingle = reviews.map((data, index) => {
  return (
    <div className="review" key={index}>
      <h4>{data.name}</h4>
      <span>{data.date}</span><br />
      <span>{data.rating}</span>
      <p>{data.description}</p>
    </div>
  )
})
  return (
    <div>
      <Rating rating={rating} />
      <Dropdown sort={this.sortBy.bind(this)}/>
      {reviewSingle}
    </div>
  )
}
}

export default App;
