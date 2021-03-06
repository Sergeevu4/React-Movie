import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner, Error, MovieList } from '../../components';

import {
  getMovies,
  movieRemoved,
  movieAddedToWillWatch,
  movieRemovedToWillWatch,
} from '../../actions';

// # Компонент Контейнер - отвечает за Логику, но не за отображения
class MovieListContainer extends Component {
  componentDidMount() {
    this.updateMovies();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.sortTypeByMovies !== this.props.sortTypeByMovies ||
      prevProps.page !== this.props.page
    ) {
      this.updateMovies();
    }
  }

  updateMovies() {
    // Можно передать любые параметры в Thunk через компонент во время вызова
    this.props.getMovies();
  }

  render() {
    // Props из Redux Store через mapStateToProps
    // # 4) После обновления state, через dispatch action,
    // загружаются данные и обновляется компонент с этими данными
    const {
      movies,
      loading,
      error,
      movieAddedToWillWatch,
      movieRemovedToWillWatch,
      movieRemoved,
    } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Error />;
    }

    // console.log(addMovieWillWatch);

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

const mapStateToProps = ({ movieList, pageInfo, sortType }) => {
  const { movies, loading, error } = movieList;
  const { page } = pageInfo;
  const { sortTypeByMovies } = sortType;

  return {
    movies,
    loading,
    error,
    page,
    sortTypeByMovies,
  };
};

const mapDispatchToProps = {
  getMovies,
  movieRemoved,
  movieAddedToWillWatch,
  movieRemovedToWillWatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
