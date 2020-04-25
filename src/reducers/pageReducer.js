import { SET_TOTAL_PAGES, SET_CURRENT_PAGE } from '../actions/actionTypes';

const initialState = {
  page: 1,
  totalPages: 0,
};

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};
