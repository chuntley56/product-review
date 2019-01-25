import React, { Component } from 'react';
import Review from './Review';
import RatingBox from './RatingBox';
import Form from './Form';
import Sort from './Sort';
import Pagination from './Pagination';

class App extends Component {
constructor(props){
  super(props);

  this.state = {
    reviews: [],
    page: 1
  }
}

componentDidMount() {
  fetch('./data.json')
    .then(response => response.json())
    .then(data => { this.setState({ reviews: data.reviews.sort((a, b) => b.date.localeCompare(a.date)) })});
}

sort = event => {
  const { reviews } = this.state;
  const order = event.target.value;
  event.preventDefault();

    (order === 'old') ? reviews.sort((a, b) => a.date.localeCompare(b.date)) :
    (order === 'low') ? reviews.sort((a, b) => a.rating - b.rating) :
    (order === 'high') ? reviews.sort((a, b) => b.rating - a.rating) : reviews.sort((a, b) => b.date.localeCompare(a.date))

  this.setState({
    reviews: reviews,
    page: 1
  })
}

changePage = event => {
  const { page } = this.state;
  event.preventDefault();

  event.target.value === 'next' ?
  this.setState({ page: page + 1 }) :
  this.setState({ page: page - 1 })
}

render() {
  const { reviews, page } = this.state;

  const totalReviews = reviews.length;
  const indexLastReview = page * 4;
  const indexFirstReview = indexLastReview - 4;
  const currentReviews = reviews.slice(indexFirstReview, indexLastReview);
  const lastPage = Math.ceil(totalReviews / 4);
  const pageCopy = page === lastPage ?
  `${indexFirstReview + 1} of ${totalReviews} Reviews` :
  `${indexFirstReview + 1}-${indexLastReview} of ${totalReviews} Reviews`;

  const review = currentReviews.map((data, index) => {
    return (
    <Review data={data} key={index}/> )})

  return (
    <div>
      <RatingBox reviews={reviews} />
      <section className="toolbar">
        <div className="review-total">
          {pageCopy}
        </div>
        <Sort sort={this.sort.bind(this)} />
      </section>
      <section className="reviews">
        {review}
      </section>
      <Pagination
        page={page}
        lastPage={lastPage}
        changePage={this.changePage.bind(this)} />
    </div>
  )
}
}

export default App;
