import React from 'react';
import { MovieItem } from '../MovieItem/MovieItem';

export const MovieList = ({
  movies,
  movieRemoved,
  movieAddedToWillWatch,
  movieRemovedToWillWatch,
}) => {
  const onMovieAddedToWillWatch = (movie) => (_evt) => movieAddedToWillWatch(movie);

  const onMovieRemovedToWillWatch = (movie) => (_evt) => movieRemovedToWillWatch(movie);

  const onMovieRemoved = (id) => (_evt) => movieRemoved(id);

  return (
    <div className='row mt-4'>
      {movies.map((movie) => {
        return (
          <div className='col-6 mb-4' key={movie.id}>
            <MovieItem
              movie={movie}
              removeMovie={onMovieRemoved(movie.id)}
              onMovieAddedToWillWatch={onMovieAddedToWillWatch(movie)}
              onMovieRemovedToWillWatch={onMovieRemovedToWillWatch(movie)}
            />
          </div>
        );
      })}
    </div>
  );
};
