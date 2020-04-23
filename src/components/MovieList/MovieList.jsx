import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import Loader from '../Loader/Loader';

const MovieList = ({
  movies,
  isLoading,
  removeMovie,
  addMovieWillWatch,
  removeMovieWillWatch,
}) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='row mt-4'>
      {movies.map((movie) => {
        return (
          <div className='col-6 mb-4' key={movie.id}>
            <MovieItem
              movie={movie}
              removeMovie={() => removeMovie(movie.id)}
              addMovieWillWatch={() => addMovieWillWatch(movie)}
              removeMovieWillWatch={() => removeMovieWillWatch(movie.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
