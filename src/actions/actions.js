import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_CHANGE_SORT_TYPE_BY_MOVIES,
  REMOVE_MOVIE,
  TOGGLE_PROPERTY_WILL_WATCH_MOVIE,
  RESET_PROPERTY_WILL_WATCH_MOVIE,
  SET_CURRENT_PAGE,
  ADD_MOVIE_WILL_WATCH,
  REMOVE_MOVIE_WILL_WATCH,
  REMOVE_ALL_MOVIE_WILL_WATCH,
  SET_TOTAL_PAGES,
} from './actionTypes';

import { togglePropertyWillWatch, checkPropertyWillWatch } from './actionsUtils';

// Класс сервис
import { MovieService } from '../services/MovieService';

// Начала загрузки (обнуления и спиннер)
const moviesRequested = () => ({
  type: FETCH_MOVIES_REQUEST,
});

// Успешная загрузка, запись полученных данных в массив
const moviesLoaded = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

// Ошибка при загрузке
const moviesError = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

// Удаления фильма из каталога всех фильмов
const movieRemoved = (movieId) => ({
  type: REMOVE_MOVIE,
  payload: movieId,
});

// Переключения свойства у фильма в каталоге всех фильмов
const movieToggleProperty = (movies) => ({
  type: TOGGLE_PROPERTY_WILL_WATCH_MOVIE,
  payload: movies,
});

// Сброс всех свойств в каталоге фильмов
const moviesResetProperty = () => ({
  type: RESET_PROPERTY_WILL_WATCH_MOVIE,
});

// ! THUNK
// Данные находятся в независимых Reducer при этом, они остаются взаимосвязанными
// для того, чтобы работать с ними одновременно и обновлять в них актуальную информацию
// используются Thunk - так через них можно получить весь Redux state

// Переключения страниц
const setCurrentPage = (currentPage) => (dispatch, getState) => {
  const {
    pageInfo: { page },
  } = getState();

  // Если выбранная страница точна та же, что и в state ~ выход
  if (currentPage === page) {
    return;
  }

  dispatch({
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  });
};

// Установка количества всех страниц с сервера, необходима для пагинации
const setTotalPages = (total) => (dispatch, getState) => {
  const {
    pageInfo: { totalPages },
  } = getState();

  if (total === totalPages) {
    return;
  }

  dispatch({
    type: SET_TOTAL_PAGES,
    payload: total,
  });
};

// Метод серверной сортировки
const moviesChangeSort = (sortType) => ({
  type: FETCH_CHANGE_SORT_TYPE_BY_MOVIES,
  payload: sortType,
});

// Добавления в список фильмов для просмотра
const movieAddedToWillWatch = (movie) => (dispatch) => {
  // willWatch true
  const updateMovie = togglePropertyWillWatch(movie);

  // Обновление списка фильмов, с переключенным состоянием willWatch
  dispatch(movieToggleProperty(updateMovie));

  dispatch({
    type: ADD_MOVIE_WILL_WATCH,
    payload: updateMovie,
  });
};

// Удаление из списка фильмов для просмотра
const movieRemovedToWillWatch = (movie) => (dispatch) => {
  // willWatch false
  const updateMovie = togglePropertyWillWatch(movie);

  // Обновление списка фильмов, с переключенным состоянием willWatch
  dispatch(movieToggleProperty(updateMovie));

  dispatch({
    type: REMOVE_MOVIE_WILL_WATCH,
    payload: movie,
  });
};

// Удаление всех фильмов для просмотра
const allMoviesDeletedToWillWatch = () => (dispatch) => {
  dispatch(moviesResetProperty());

  dispatch({
    type: REMOVE_ALL_MOVIE_WILL_WATCH,
  });
};

// Класс Сервис
const movieService = new MovieService();

// Получения асинхронных данных через Thunk
const getMovies = () => (dispatch, getState) => {
  const {
    sortType: { sortTypeByMovies },
    pageInfo: { page },
    movieWillWatchList: { movieWillWatch },
  } = getState();

  dispatch(fetchMovies(sortTypeByMovies, page, movieWillWatch));
};

// Загрузка данных
const fetchMovies = (sortTypeByMovies, page, movieWillWatch) => async (dispatch) => {
  try {
    // Загрузки, обнуление первоначального состояния и активация Spinner
    dispatch(moviesRequested());

    // Получения данных с Сервера
    const { movies, totalPages } = await movieService.getResource(sortTypeByMovies, page);

    // При загрузке страницы активируется свойство willWatch у тех фильмов которые
    // находятся в списке для просмотра
    const verifiedMovies = checkPropertyWillWatch(movies, movieWillWatch);

    // Отправка загруженных данных в Reducer
    dispatch(moviesLoaded(verifiedMovies));

    dispatch(setTotalPages(totalPages));
  } catch (error) {
    dispatch(moviesError(error));
  }
};

export {
  getMovies,
  moviesChangeSort,
  setCurrentPage,
  movieRemoved,
  movieAddedToWillWatch,
  movieRemovedToWillWatch,
  allMoviesDeletedToWillWatch,
};
