import React from 'react';
import classNames from 'classnames';

export const Pagination = ({
  pageNumbers,
  page,
  totalPages,
  setFirstPage,
  setLastPage,
  setNextPage,
  setPrevPage,
  setNumbersPage,
}) => {
  const handelClick = (fn, ...args) => (evt) => {
    evt.preventDefault();
    fn(...args);
  };

  // Функция для активации класса выбранной страницы
  const getClass = (page, currentPage, className) =>
    classNames('page-item', {
      [className]: page === currentPage,
    });

  return (
    <nav>
      <ul className='pagination d-flex justify-content-center'>
        <li className={getClass(1, page, 'disabled')}>
          <a href='!#' className='page-link' onClick={handelClick(setFirstPage)}>
            First
          </a>
        </li>

        <li className={getClass(1, page, 'disabled')}>
          <a href='!#' className='page-link' onClick={handelClick(setPrevPage)}>
            <span aria-hidden='true'>&laquo;</span>
          </a>
        </li>

        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className={getClass(pageNumber, page, 'active')}>
            <a
              href='!#'
              className='page-link'
              onClick={handelClick(setNumbersPage, pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}

        {/* // Отключить если последняя стараница */}
        <li className={getClass(totalPages, page, 'disabled')}>
          <a href='!#' className='page-link' onClick={handelClick(setNextPage)}>
            <span aria-hidden='true'>&raquo;</span>
          </a>
        </li>

        <li className={getClass(totalPages, page, 'disabled')}>
          <a href='!#' className='page-link' onClick={handelClick(setLastPage)}>
            Last
          </a>
        </li>
      </ul>
    </nav>
  );
};
