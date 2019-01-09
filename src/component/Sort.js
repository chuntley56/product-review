import React, { Component } from 'react';

class Sort extends Component {
render() {
  const { sort, currentPage, lastPage, isLastPage, isFirstPage, prevPage, nextPage } = this.props

  return (
    <div className="reviewNav">
    <div className="dropdown"></div>
    <div className="page-controls">
      <button className={`arrow prev ${isFirstPage ? 'hide' : ''}`} onClick={prevPage}></button>
        <span>Page {currentPage} of {lastPage}</span>
      <button className={`arrow next ${isLastPage ? 'hide' : ''}`} onClick={nextPage}></button>
    </div>
      <div className="dropdown">
        <label for="order">Sort By</label>
        <select onChange={sort} name="order" id="order">
          <option value="new">Newest</option>
          <option value="old">Oldest</option>
          <option value="high">High to low</option>
          <option value="low">Low to high</option>
        </select>
      </div>
    </div>
  )
}
}

export default Sort;
