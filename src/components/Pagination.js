import React, { Component } from 'react';

class Pagination extends Component {
render() {
  const { currentPage, lastPage, prevPage, nextPage } = this.props;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  return (
      <section className="pagination">
        <button className={`arrow prev ${isFirstPage ? 'hide' :''}`} onClick={prevPage}></button>
          <span>Page {currentPage} of {lastPage}</span>
        <button className={`arrow next ${isLastPage ? 'hide' :''}`} onClick={nextPage}></button>
      </section>
  )
}
}

export default Pagination;
