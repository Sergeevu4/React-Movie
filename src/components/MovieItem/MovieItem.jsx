import React from 'react';
import Button from '../Button/Button';
import imgNotFound from '../../img/imgNotFound.png';

export const MovieItem = ({
  movie,
  removeMovie,
  onMovieAddedToWillWatch,
  onMovieRemovedToWillWatch,
}) => {
  const toggleButton = movie.willWatch ? (
    <Button className='btn-danger' onClick={onMovieRemovedToWillWatch}>
      Remove Will Watch
    </Button>
  ) : (
    <Button className='btn-success' onClick={onMovieAddedToWillWatch}>
      Add Will Watch
    </Button>
  );

  const imgPath = movie.backdrop_path || movie.poster_path;
  const img = imgPath ? `https://image.tmdb.org/t/p/w500${imgPath}` : imgNotFound;

  return (
    <div className='card'>
      <img className='card-img-top' src={img} alt={movie.title} />

      <div className='card-body'>
        <h6 className='card-title'>{movie.title}</h6>

        <div className='d-flex justify-content-between align-items-start mb-4'>
          <p className='mb-0'>Rating: {movie.vote_average}</p>

          {toggleButton}
        </div>

        <Button className='btn-secondary' onClick={removeMovie}>
          Delete Movie
        </Button>
      </div>
    </div>
  );
};
