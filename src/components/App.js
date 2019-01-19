import React, { Component } from 'react';
import Review from './Review';
import RatingBox from './RatingBox';
import Form from './Form';
import Toolbar from './Toolbar';
import Pagination from './Pagination';
import { sortReviews } from '../actions';


class App extends Component {
constructor(props){
  super(props);

  this.state = {
    reviews: [],
    order: "new",
    currentPage: 1
  }
}

componentDidMount() {
  fetch('./data.json')
    .then(response => response.json())
    .then(data => { this.setState({ reviews: data.reviews.sort((a, b) => b.date.localeCompare(a.date)) })});
}

sortOrder = event => {
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

nextPage() {
  const { currentPage } = this.state;
  this.setState({ currentPage: currentPage + 1 })
}

prevPage() {
  const { currentPage } = this.state;
  this.setState({ currentPage: currentPage - 1 })
}

render() {
const { reviews, currentPage } = this.state;

const totalReviews = reviews.length;
const indexLastReview = currentPage * 4;
const indexFirstReview = indexLastReview - 4;
const currentReviews = reviews.slice(indexFirstReview, indexLastReview);
const lastPage = Math.ceil(totalReviews / 4);

const review = currentReviews.map((data, index) => { return <Review data={data} key={index}/> })

  return (
    <div>
      <RatingBox reviews={reviews} />
      <Toolbar
        sort={this.sortOrder.bind(this)}
        totalReviews={totalReviews}
        indexFirstReview={indexFirstReview}
        indexLastReview={indexLastReview} />
      <section className="reviews">
        {review}
      </section>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        prevPage={this.prevPage.bind(this)}
        nextPage={this.nextPage.bind(this)} />
    </div>
  )
}
}

export default App;
