import React from 'react';
import Button from '../Button/Button';

export const MovieWillWatch = ({
  movieWillWatch,
  movieRemovedToWillWatch,
  allMoviesAddedToWillWatch,
}) => {
  const onMovieRemovedToWillWatch = (id) => (_evt) => movieRemovedToWillWatch(id);

  const resetButton = movieWillWatch.length ? (
    <Button className='btn-info mb-2' onClick={allMoviesAddedToWillWatch}>
      Reset
    </Button>
  ) : null;

  return (
    <div className='col-3'>
      <h4>Will Watch: {movieWillWatch.length} movies</h4>

      {resetButton}

      <ul className='list-group list-group-flush'>
        {movieWillWatch.map((movie) => (
          <li key={movie.id} className='list-group-item'>
            <div className='d-flex justify-content-between'>
              <p>{movie.title}</p>
              <p>{movie.vote_average}</p>
            </div>

            <Button className='btn-danger' onClick={onMovieRemovedToWillWatch(movie.id)}>
              Deleted
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default MovieWillWatch;
