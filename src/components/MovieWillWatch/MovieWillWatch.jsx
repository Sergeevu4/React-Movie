import React from 'react';
import cn from 'classnames';
import Button from '../Button/Button';

export const MovieWillWatch = ({
  showMenu,
  toggleShowMenuWillWatch,
  movieWillWatch,
  movieRemovedToWillWatch,
  allMoviesDeletedToWillWatch,
}) => {
  const onMovieRemovedToWillWatch = (movie) => (_evt) => movieRemovedToWillWatch(movie);

  const countMovies = movieWillWatch.length;
  const isOpenMenu = showMenu && countMovies;

  const classNameToggleButton = cn('ml-auto', {
    'btn-warning': showMenu,
    'btn-info': !showMenu,
  });

  const toggleButton = countMovies ? (
    <Button className={classNameToggleButton} onClick={toggleShowMenuWillWatch}>
      {isOpenMenu ? `-` : `+`}
    </Button>
  ) : null;

  const resetButton = countMovies ? (
    <Button className='btn-info mb-2' onClick={allMoviesDeletedToWillWatch}>
      Reset
    </Button>
  ) : null;

  return (
    <div className='col-3'>
      <div className='d-flex flex-row align-items-start'>
        <h4>Will Watch: {countMovies} movies</h4>
        {toggleButton}
      </div>

      {showMenu && (
        <>
          {resetButton}

          <ul className='list-group list-group-flush'>
            {movieWillWatch.map((movie) => (
              <li key={movie.id} className='list-group-item'>
                <div className='d-flex justify-content-between'>
                  <p>{movie.title}</p>
                  <p>{movie.vote_average}</p>
                </div>

                <Button className='btn-danger' onClick={onMovieRemovedToWillWatch(movie)}>
                  Deleted
                </Button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
