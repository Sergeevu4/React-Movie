import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  REMOVE_MOVIE,
  TOGGLE_PROPERTY_WILL_WATCH_MOVIE,
  RESET_PROPERTY_WILL_WATCH_MOVIE,
} from '../actions/actionTypes';

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        movies: [],
        loading: true,
        error: null,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        movies: action.payload, // movies с сервера
        loading: false,
        error: null,
      };

    case FETCH_MOVIES_FAILURE:
      return {
        movies: [],
        loading: false,
        error: action.payload,
      };

    case REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };

    case TOGGLE_PROPERTY_WILL_WATCH_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.payload.id) {
            return action.payload;
          }
          return movie;
        }),
      };

    case RESET_PROPERTY_WILL_WATCH_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) => ({
          ...movie,
          willWatch: false,
        })),
      };

    default:
      return state;
  }
};
