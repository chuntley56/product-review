import React, { Component } from 'react';

class Sort extends Component {
render() {
  const { sort } = this.props;

  return (
      <div className="sort-wrap">
        <label htmlFor="sort">Sort By</label>
        <select onChange={sort} name="sort" id="sort" className="sort">
          <option value="new">Newest</option>
          <option value="old">Oldest</option>
          <option value="high">High to low</option>
          <option value="low">Low to high</option>
        </select>
      </div>
  )
}
}

export default Sort;
