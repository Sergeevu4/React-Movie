import React from 'react';
import { getPaginationNumbers } from './getPaginationNumbers';
import classNames from 'classnames';

const Pagination = ({
  currentPage,
  totalPages,
  onPaginateNumber,
  onPaginateNext,
  onPaginatePrev,
  onPaginateFirst,
  onPaginateLast,
}) => {
  const maxPages = 10;
  const pageNumbers = getPaginationNumbers(currentPage, totalPages, maxPages);

  const handelClick = (fn, ...args) => (evt) => {
    evt.preventDefault();
    fn(...args);
  };

  const getClass = (page, currentPage, name) =>
    classNames('page-item', {
      [name]: page === currentPage,
    });

  return (
    <nav>
      <ul className='pagination d-flex justify-content-center'>
        <li className='page-item'>
          <a href='!#' className='page-link' onClick={handelClick(onPaginateFirst)}>
            First
          </a>
        </li>

        <li className={getClass(1, currentPage, 'disabled')}>
          <a href='!#' className='page-link' onClick={handelClick(onPaginatePrev)}>
            <span aria-hidden='true'>&laquo;</span>
          </a>
        </li>

        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className={getClass(pageNumber, currentPage, 'active')}>
            <a
              href='!#'
              className='page-link'
              onClick={handelClick(onPaginateNumber, pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}

        <li
          // Отключить если последняя стараница
          className={getClass(totalPages, currentPage, 'disabled')}
        >
          <a href='!#' className='page-link' onClick={handelClick(onPaginateNext)}>
            <span aria-hidden='true'>&raquo;</span>
          </a>
        </li>

        <li className='page-item'>
          <a href='!#' className='page-link' onClick={handelClick(onPaginateLast)}>
            Last
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
