import React, { Component } from 'react';
import Rating from './Rating.js';
import Form from './Form.js';
import Sort from './Sort.js';

class App extends Component {
constructor(props){
  super(props);

  this.state = {
    reviewList: [],
    order: "new",
    currentPage: 1
  }
}

componentDidMount() {
  fetch('./data.json')
    .then(response => response.json())
    .then(data => { this.setState({ reviewList: data.reviews.sort((a, b) => b.date.localeCompare(a.date)) })});
}

sortOrder = event => {
  this.setState({
    order: event.target.value
  }, () => {
  this.sortReviews()
  })
}

sortReviews() {
  const { reviewList, order } = this.state;

  if (order === 'old') {
    reviewList.sort((a, b) => a.date.localeCompare(b.date));}
  else if (order === 'new') {
    reviewList.sort((a, b) => b.date.localeCompare(a.date));}
  else if (order === 'low') {
    reviewList.sort((a, b) => a.rating - b.rating);}
  else if (order === 'high') {
    reviewList.sort((a, b) => b.rating - a.rating);}

  this.setState({
    reviewList: reviewList
  })
}

nextPage() {
  const { currentPage } = this.state;
  this.setState({ currentPage: currentPage + 1 })
}

prevPage() {
  const { currentPage } = this.state;
  this.setState({ currentPage: currentPage - 1 })
}

render() {
const { reviewList, currentPage } = this.state;
const ratingAvg = (Math.round(reviewList.reduce((total, { rating }) => rating + total, 0) / reviewList.length * 10) / 10) || 5;

const reviewsPerPage = 4;
const indexLastReview = currentPage * reviewsPerPage;
const indexFirstReview = indexLastReview - reviewsPerPage;
const currentReviews = reviewList.slice(indexFirstReview, indexLastReview);
const lastPage = Math.ceil(reviewList.length / reviewsPerPage);
const isFirstPage = currentPage === 1;
const isLastPage = currentPage === lastPage;

const reviewSingle = currentReviews.map((data, index) => {
  return (
    <div className="reviewSingle" key={index}>
      <h4>{data.name}</h4>
      <span>{data.date}</span><br />
      <span>{data.rating}</span>
      <p>{data.description}</p>
    </div>
  )
})

  return (
    <div>
      <Rating ratingAvg={ratingAvg} />
      <Sort
        sort={this.sortOrder.bind(this)}
        currentPage={currentPage}
        lastPage={lastPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        prevPage={this.prevPage.bind(this)}
        nextPage={this.nextPage.bind(this)} />
      {reviewSingle}
    </div>
  )
}
}

export default App;
