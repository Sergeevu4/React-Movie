import React, { Component } from 'react';
import { API_URL, API_KEY_3 } from '../../utils/api';

import MovieTabs from '../MovieTabs/MovieTabs';
import Pagination from '../Pagination/Pagination';
import MovieList from '../MovieList/MovieList';
import MovieWillWatch from '../MovieWillWatch/MovieWillWatch.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    isLoading: false,
    movies: [],
    movieWillWatch: [],
    sort_by: 'popularity.desc',
    page: 1,
    total_pages: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.sort_by !== this.state.sort_by || prevState.page !== this.state.page) {
      this.fetchData();
    }
  }

  fetchData() {
    this.setState({ isLoading: true });

    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          total_pages: data.total_pages,
          isLoading: false,
        });
      })
      .catch((e) => {
        this.setState({ isLoading: false });
      });
  }

  removeMovie = (id) => {
    this.setState((state) => ({
      movies: state.movies.filter((movie) => movie.id !== id),
    }));
  };

  addMovieWillWatch = (movie) => {
    this.setState((state) => ({
      movieWillWatch: [...state.movieWillWatch, movie],
    }));
  };

  removeMovieWillWatch = (id) => {
    this.setState((state) => ({
      movieWillWatch: state.movieWillWatch.filter((movie) => movie.id !== id),
    }));
  };

  sortByMovieTabs = (value) => {
    this.setState({
      sort_by: value,
    });
  };

  // Handler - изменения страницы
  onPaginateNumber = (pageNumber) => this.setState({ page: pageNumber });

  onPaginateNext = () =>
    this.setState((state) => ({
      page: Math.min(state.page + 1, state.total_pages),
    }));

  onPaginatePrev = () =>
    this.setState((state) => ({ page: Math.max(state.page - 1, 1) }));

  onPaginateFirst = () => this.setState({ page: 1 });

  onPaginateLast = () => this.setState({ page: this.state.total_pages });

  render() {
    const { isLoading, movies, movieWillWatch, sort_by, total_pages, page } = this.state;

    return (
      <div className='container-md'>
        <div className='row pt-4'>
          <div className='col-9'>
            <MovieTabs sort_by={sort_by} sortByMovieTabs={this.sortByMovieTabs} />

            <MovieList
              movies={movies}
              isLoading={isLoading}
              removeMovie={this.removeMovie}
              addMovieWillWatch={this.addMovieWillWatch}
              removeMovieWillWatch={this.removeMovieWillWatch}
            />

            <Pagination
              currentPage={page}
              totalPages={total_pages}
              onPaginateNumber={this.onPaginateNumber}
              onPaginateNext={this.onPaginateNext}
              onPaginatePrev={this.onPaginatePrev}
              onPaginateFirst={this.onPaginateFirst}
              onPaginateLast={this.onPaginateLast}
            />
          </div>

          <MovieWillWatch movieWillWatch={movieWillWatch} />
        </div>
      </div>
    );
  }
}
