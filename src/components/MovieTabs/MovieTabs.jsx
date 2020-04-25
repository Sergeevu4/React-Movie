import React, { memo } from 'react';
import classNames from 'classnames';

const MovieTabs = ({ tabs, sortTypeByMovies, changeSortType }) => {
  const handleClick = (sortType) => (_evt) => changeSortType(sortType);

  const getClassActive = (sortType) =>
    classNames('nav-link', { active: sortTypeByMovies === sortType });

  return (
    <ul className='tabs nav nav-pills'>
      {tabs.map(({ sortType, label }) => (
        <li className='nav-item' key={sortType}>
          <div className={getClassActive(sortType)} onClick={handleClick(sortType)}>
            {label}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default memo(MovieTabs);
