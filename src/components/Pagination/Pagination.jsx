import React from 'react';

const Pagination = ({ page, onPaginateNext, onPaginatePrev }) => {
  const nextPage = () => (evt) => {
    evt.preventDefault();
    onPaginateNext();
  };

  const prevPage = () => (evt) => {
    evt.preventDefault();
    onPaginatePrev();
  };

  return (
    <nav>
      <ul className='pagination d-flex justify-content-center'>
        <li className={`page-item`}>
          <a href='!#' className='page-link' onClick={prevPage()}>
            Previous
          </a>
        </li>

        <li className={`page-item`}>
          <a href='!#' className='page-link'>
            {page}
          </a>
        </li>

        <li
          // Отключить если последняя стараница
          className={`page-item`}
        >
          <a href='!#' className='page-link' onClick={nextPage()}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
