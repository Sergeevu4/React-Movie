import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner, Error, MovieList } from '../../components';

import {
  getMovies,
  movieRemoved,
  movieAddedToWillWatch,
  movieRemovedToWillWatch,
} from '../../actions';

import { withRouter } from 'react-router-dom';

// # Компонент Контейнер - отвечает за Логику, но не за отображения
class MovieListContainer extends Component {
  componentDidMount() {
    this.updateMovies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match !== this.props.match) {
      this.updateMovies();
    }
  }

  updateMovies() {
    // Выбранная страницы полученная через url React Router
    const { currentPage } = this.props;

    // Если в url после page/ - или 0 пустое значение
    if (!currentPage) {
      return;
    }

    // Можно передать любые параметры в Thunk через компонент во время вызова
    this.props.getMovies(currentPage);
  }

  render() {
    // Props из Redux Store через mapStateToProps
    // # 4) После обновления state, через dispatch action,
    // загружаются данные и обновляется компонент с этими данными
    const {
      currentPage,
      movies,
      loading,
      error,
      movieAddedToWillWatch,
      movieRemovedToWillWatch,
      movieRemoved,
    } = this.props;

    if (!currentPage) {
      return <Error>Please, current page</Error>;
    }

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Error>Error</Error>;
    }

    return (
      <MovieList
        movies={movies}
        movieAddedToWillWatch={movieAddedToWillWatch}
        movieRemovedToWillWatch={movieRemovedToWillWatch}
        movieRemoved={movieRemoved}
      />
    );
  }
}

const mapStateToProps = ({ movieList, sortType }, { match: { params } }) => {
  // REDUX STATE
  const { movies, loading, error } = movieList;
  const { sortTypeByMovies } = sortType;

  // ROUTER - ownProps
  const currentPage = parseInt(params.currentPage, 10);

  return {
    currentPage,
    movies,
    loading,
    error,
    sortTypeByMovies,
  };
};

const mapDispatchToProps = {
  getMovies,
  movieRemoved,
  movieAddedToWillWatch,
  movieRemovedToWillWatch,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieListContainer)
);
