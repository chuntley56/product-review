import React, { Component } from 'react';

class Dropdown extends Component {
render() {
  const { sort } = this.props

  return (
    <div className="dropdown">
      <select onChange={sort}>
        <option value="new">Newest</option>
        <option value="old">Oldest</option>
        <option value="high">High to low</option>
        <option value="low">Low to high</option>
      </select>
    </div>
  )
}
}

export default Dropdown;
