import React, { Component } from 'react';
import Button from '../Button/Button';

export default class MovieItem extends Component {
  state = {
    willWatch: false,
  };

  shouldComponentUpdate(nexProps, nextState) {
    if (
      nexProps.movie !== this.props.movie ||
      nextState.willWatch !== this.state.willWatch
    ) {
      return true;
    }
    return false;
  }

  onToggleWatch = () => {
    this.setState(
      (state) => ({
        willWatch: !state.willWatch,
      }),
      () => {
        if (this.state.willWatch) {
          this.props.addMovieWillWatch();
        } else {
          this.props.removeMovieWillWatch();
        }
      }
    );
  };

  render() {
    const { movie, removeMovie } = this.props;

    const toggleWillWatch = this.state.willWatch ? (
      <Button className='btn-danger' onClick={this.onToggleWatch}>
        Remove Will Watch
      </Button>
    ) : (
      <Button className='btn-success' onClick={this.onToggleWatch}>
        Add Will Watch
      </Button>
    );

    return (
      <div className='card'>
        <img
          className='card-img-top'
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title}
        />

        <div className='card-body'>
          <h6 className='card-title'>{movie.title}</h6>

          <div className='d-flex justify-content-between align-items-start mb-4'>
            <p className='mb-0'>Rating: {movie.vote_average}</p>

            {toggleWillWatch}
          </div>

          <button onClick={removeMovie}>Delete Movie</button>
        </div>
      </div>
    );
  }
}
