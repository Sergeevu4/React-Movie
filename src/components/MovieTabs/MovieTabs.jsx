import React, { memo } from 'react';
import classNames from 'classnames';

const MovieTabs = ({ sort_by, sortByMovieTabs }) => {
  const SORT_BY = {
    popularity: 'popularity.desc',
    revenue: 'revenue.desc',
    voteAverage: 'vote_average.desc',
  };

  const handleClick = (value) => (_evt) => sortByMovieTabs(value);

  const getClassActive = (value) => classNames('nav-link', { active: sort_by === value });

  return (
    <ul className='tabs nav nav-pills'>
      <li className='nav-item'>
        <div
          className={getClassActive(SORT_BY.popularity)}
          onClick={handleClick(SORT_BY.popularity)}
        >
          Popularity desc
        </div>
      </li>

      <li className='nav-item'>
        <div
          className={getClassActive(SORT_BY.revenue)}
          onClick={handleClick(SORT_BY.revenue)}
        >
          Revenue desc
        </div>
      </li>

      <li className='nav-item'>
        <div
          className={getClassActive(SORT_BY.voteAverage)}
          onClick={handleClick(SORT_BY.voteAverage)}
        >
          Vote average
        </div>
      </li>
    </ul>
  );
};

export default memo(MovieTabs);
