import React, { Component } from 'react';

export default ({ page, lastPage, changePage }) => (
      <section className="pagination">
        <button value="prev" className={`arrow prev ${page === 1 ? 'hide' :''}`} onClick={changePage}></button>
          <span>Page {page} of {lastPage}</span>
        <button value="next" className={`arrow next ${page === lastPage ? 'hide' :''}`} onClick={changePage}></button>
      </section>
  )
