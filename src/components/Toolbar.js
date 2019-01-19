import React, { Component } from 'react';

class Toolbar extends Component {
render() {
  const { sort, indexFirstReview, indexLastReview, totalReviews } = this.props;

  return (
    <section className="toolbar">
      <div className="review-total">
        {indexFirstReview + 1}-{indexLastReview} of {totalReviews} Reviews
      </div>
      <div className="sort-wrap">
        <label htmlFor="sort">Sort By</label>
        <select onChange={sort} name="sort" id="sort" className="sort">
          <option value="new">Newest</option>
          <option value="old">Oldest</option>
          <option value="high">High to low</option>
          <option value="low">Low to high</option>
        </select>
      </div>
    </section>
  )
}
}

export default Toolbar;
