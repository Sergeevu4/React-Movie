import { FETCH_CHANGE_SORT_TYPE_BY_MOVIES } from '../actions/actionTypes';

const initialState = {
  sortTypeByMovies: 'popularity', // дефолтное значение
};

export const sortTypeByMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHANGE_SORT_TYPE_BY_MOVIES:
      return {
        sortTypeByMovies: action.payload,
      };

    default:
      return state;
  }
};
