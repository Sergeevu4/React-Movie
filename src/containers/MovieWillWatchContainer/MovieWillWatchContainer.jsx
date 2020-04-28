import React, { Component } from 'react';
import { connect } from 'react-redux';

import { movieRemovedToWillWatch, allMoviesDeletedToWillWatch } from '../../actions';
import { MovieWillWatch } from '../../components';

// # Компонент Контейнер - отвечает за Логику, но не за отображения
class MovieWillWatchContainer extends Component {
  render() {
    const {
      movieWillWatch,
      movieRemovedToWillWatch,
      allMoviesDeletedToWillWatch,
    } = this.props;

    return (
      <MovieWillWatch
        movieWillWatch={movieWillWatch}
        movieRemovedToWillWatch={movieRemovedToWillWatch}
        allMoviesDeletedToWillWatch={allMoviesDeletedToWillWatch}
      />
    );
  }
}

const mapStateToProps = ({ movieWillWatchList: { movieWillWatch } }) => ({
  movieWillWatch,
});

const mapDispatchToProps = {
  movieRemovedToWillWatch,
  allMoviesDeletedToWillWatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieWillWatchContainer);
