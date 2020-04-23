import React from 'react';

const MovieWillWatch = ({ movieWillWatch }) => {
  return (
    <div className='col-3'>
      <h4>Will Watch: {movieWillWatch.length} movies</h4>
      <ul className='list-group'>
        {movieWillWatch.map((movie) => (
          <li key={movie.id} className='list-group-item mb-4'>
            <div className='d-flex justify-content-between'>
              <p>{movie.title}</p>
              <p>{movie.vote_average}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieWillWatch;
