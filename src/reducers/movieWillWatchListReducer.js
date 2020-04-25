import {
  ADD_MOVIE_WILL_WATCH,
  REMOVE_MOVIE_WILL_WATCH,
  REMOVE_ALL_MOVIE_WILL_WATCH,
} from '../actions/actionTypes';

const initialState = {
  movieWillWatch: [],
};

export const movieWillWatchListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_WILL_WATCH:
      return {
        movieWillWatch: [...state.movieWillWatch, action.payload],
      };

    case REMOVE_MOVIE_WILL_WATCH:
      return {
        movieWillWatch: state.movieWillWatch.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };

    case REMOVE_ALL_MOVIE_WILL_WATCH:
      return {
        movieWillWatch: [],
      };

    default:
      return state;
  }
};
