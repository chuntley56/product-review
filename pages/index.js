import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-unfetch';
import Review from '../components/Review';
import RatingBox from '../components/RatingBox';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';
import '../static/css/style.css';

const paginate = (array, reviewsPerPage, page) => {
  --page;
  return array.slice(page * reviewsPerPage, (page + 1) * reviewsPerPage);
}

class App extends Component {
  static async getInitialProps() {
    const response = await fetch('https://chuntley56.github.io/product-review-next/static/data/data.json')
    const reviews = await response.json()
    return {reviews: reviews.sort((a, b) => b.date.localeCompare(a.date))}
  }

  state = {
    reviews: this.props.reviews,
    page: 1
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
  const { page, reviews } = this.state;
  const totalReviews = reviews.length;
  const reviewsPerPage = 4;
  const indexLastReview = page * reviewsPerPage;
  const indexFirstReview = indexLastReview - reviewsPerPage;
  const currentReviews = paginate(reviews, reviewsPerPage, page);
  const lastPage = Math.ceil(totalReviews / reviewsPerPage);
  const rating = (Math.round(reviews.reduce((total, { rating }) => rating + total, 0) / reviews.length * 10) / 10) || 5;
  const review = currentReviews.map((data, index) => {
    return (
      <Review data={data} key={index}/>
    )})

  return (
    <div className="content">
    {rating &&  <RatingBox rating={rating} />}

      <section className="toolbar">
        <div className="ui-grid-container">
        <div className="ui-grid">
          <div className="ui-grid-col">
            <div className="review-total">
              {page === lastPage ?
              `${indexFirstReview + 1} of ${totalReviews} Reviews` :
              `${indexFirstReview + 1}-${indexLastReview} of ${totalReviews} Reviews`}
            </div>
          </div>
          <div className="ui-grid-col">
              <Sort sort={this.sort.bind(this)} />
          </div>
        </div>
        </div>
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
