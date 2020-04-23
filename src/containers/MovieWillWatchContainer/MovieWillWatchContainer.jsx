import React, { Component } from 'react';
import { connect } from 'react-redux';

import { movieRemovedToWillWatch, allMoviesAddedToWillWatch } from '../../actions';
import { MovieWillWatch } from '../../components';

// # Компонент Контейнер - отвечает за Логику, но не за отображения
class MovieWillWatchContainer extends Component {
  render() {
    const {
      movieWillWatch,
      movieRemovedToWillWatch,
      allMoviesAddedToWillWatch,
    } = this.props;

    return (
      <MovieWillWatch
        movieWillWatch={movieWillWatch}
        movieRemovedToWillWatch={movieRemovedToWillWatch}
        allMoviesAddedToWillWatch={allMoviesAddedToWillWatch}
      />
    );
  }
}
// * Чтение данных из Redux Store
// state - который определен в Reducer
const mapStateToProps = ({ movieWillWatch }) => ({
  movieWillWatch,
});

const mapDispatchToProps = {
  movieRemovedToWillWatch,
  allMoviesAddedToWillWatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieWillWatchContainer);
