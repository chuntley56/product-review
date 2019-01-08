import React, { Component } from 'react';

class Dropdown extends Component {
render() {
  const { sort, currentPage, prevPage, nextPage } = this.props

  return (
    <div className="dropdown">
      <select onChange={sort}>
        <option value="new">Newest</option>
        <option value="old">Oldest</option>
        <option value="high">High to low</option>
        <option value="low">Low to high</option>
      </select>
      <div>
        <span className="prev" onClick={prevPage}>Prev</span>
        Page {currentPage} of 8
        <span className="next" onClick={nextPage}>Next</span>
      </div>
    </div>
  )
}
}

export default Dropdown;
