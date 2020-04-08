import React, { Component } from 'react';
import { API_URL, API_KEY_3 } from '../../utils/api';
import MovieItem from '../MovieItem/MovieItem';
import MovieTabs from '../MovieTabs/MovieTabs';
import Pagination from '../Pagination/Pagination';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    movies: [],
    moviesWillWatch: [],
    sort_by: 'popularity.desc',
    page: 1,
    total_pages: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.sort_by !== this.state.sort_by || prevState.page !== this.state.page) {
      console.log(prevState.page !== this.state.page);
      this.fetchData();
    }
  }

  fetchData() {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          total_pages: data.total_pages,
        });
      })
      .catch((e) => console.error(e));
  }

  removeMovie = (id) => {
    this.setState((state) => ({
      movies: state.movies.filter((movie) => movie.id !== id),
    }));
  };

  addMovieWillWatch = (movie) => {
    this.setState((state) => ({
      moviesWillWatch: [...state.moviesWillWatch, movie],
    }));
  };

  removeMovieWillWatch = (id) => {
    this.setState((state) => ({
      moviesWillWatch: state.moviesWillWatch.filter((movie) => movie.id !== id),
    }));
  };

  sortByMovieTabs = (value) => {
    this.setState({
      sort_by: value,
    });
  };

  // Handler - изменения страницы
  onPaginate = (pageNumber) => this.setState({ page: pageNumber });

  onPaginateNext = () =>
    this.setState((state) => ({ page: Math.min(state.page + 1, state.total_pages) }));

  onPaginatePrev = () =>
    this.setState((state) => ({ page: Math.max(state.page - 1, 1) }));

  render() {
    const { movies, moviesWillWatch, sort_by, total_pages, page } = this.state;

    return (
      <div className='container-md'>
        <div className='row pt-4'>
          <div className='col-9'>
            <MovieTabs sort_by={sort_by} sortByMovieTabs={this.sortByMovieTabs} />

            <div className='row mt-4'>
              {movies &&
                movies.map((movie) => {
                  return (
                    <div className='col-6 mb-4' key={movie.id}>
                      <MovieItem
                        movie={movie}
                        removeMovie={() => this.removeMovie(movie.id)}
                        addMovieWillWatch={() => this.addMovieWillWatch(movie)}
                        removeMovieWillWatch={() => this.removeMovieWillWatch(movie.id)}
                      />
                    </div>
                  );
                })}
            </div>

            <Pagination
              page={page}
              totalPage={total_pages}
              onPaginate={this.onPaginate}
              onPaginateNext={this.onPaginateNext}
              onPaginatePrev={this.onPaginatePrev}
            />
          </div>

          <div className='col-3'>
            <h4>Will Watch: {moviesWillWatch.length} movies</h4>
            <ul className='list-group'>
              {moviesWillWatch.map((movie) => (
                <li key={movie.id} className='list-group-item mb-4'>
                  <div className='d-flex justify-content-between'>
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
