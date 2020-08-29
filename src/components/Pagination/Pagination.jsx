import React from 'react';
import classNames from 'classnames';

export const Pagination = ({
  pageNumbers,
  currentPage,
  totalPages,
  setPage,
  // setFirstPage,
  // setLastPage,
  // setNextPage,
  // setPrevPage,
  // setNumbersPage,
}) => {
  // const handelClick = (fn, ...args) => (evt) => {
  //   evt.preventDefault();
  //   fn(...args);
  // };
  const handelClick = (pageName, pageNumber) => (evt) => {
    evt.preventDefault();
    setPage(pageName, pageNumber);
  };

  // Функция для активации класса выбранной страницы
  const getClass = (page, currentPage, className) =>
    classNames('page-item', {
      [className]: page === currentPage,
    });

  return (
    <nav>
      <ul className='pagination d-flex justify-content-center'>
        <li className={getClass(1, currentPage, 'disabled')}>
          <a href='!#' className='page-link' onClick={handelClick('FIRST_PAGE')}>
            First
          </a>
        </li>

        <li className={getClass(1, currentPage, 'disabled')}>
          <a href='!#' className='page-link' onClick={handelClick('PREV_PAGE')}>
            <span aria-hidden='true'>&laquo;</span>
          </a>
        </li>

        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className={getClass(pageNumber, currentPage, 'active')}>
            <a
              href='!#'
              className='page-link'
              onClick={handelClick('NUMBER_PAGE', pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}

        {/* // Отключить если последняя стараница */}
        <li className={getClass(totalPages, currentPage, 'disabled')}>
          <a href='!#' className='page-link' onClick={handelClick('NEXT_PAGE')}>
            <span aria-hidden='true'>&raquo;</span>
          </a>
        </li>

        <li className={getClass(totalPages, currentPage, 'disabled')}>
          <a href='!#' className='page-link' onClick={handelClick('LAST_PAGE')}>
            Last
          </a>
        </li>
      </ul>
    </nav>
  );
};
