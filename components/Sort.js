import React from 'react';

export default ({ order, sort }) => {
  return (
    <div className="sort-wrap">
      <label htmlFor="sort">Sort By</label>
      <select value={order} onChange={sort} name="sort" id="sort" className="sort">
        <option value="new">Newest</option>
        <option value="old">Oldest</option>
        <option value="high">High to low</option>
        <option value="low">Low to high</option>
      </select>
    </div>)}
