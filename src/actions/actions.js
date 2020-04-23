import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_CHANGE_SORT_MOVIES,
  SET_CURRENT_PAGE,
  REMOVE_MOVIE,
  ADD_MOVIE_WILL_WATCH,
  REMOVE_MOVIE_WILL_WATCH,
  REMOVE_ALL_MOVIE_WILL_WATCH,
} from './actionTypes';

// Класс сервис
import { MovieService } from '../services/MovieService';

// Начала загрузки (обнуления и спиннер)
const moviesRequested = () => ({
  type: FETCH_MOVIES_REQUEST,
});

// Успешная загрузка, запись полученных данных в массив
const moviesLoaded = (data) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: data,
});

// Ошибка при загрузке
const moviesError = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

// Метод серверной сортировки
const moviesChangeSort = (sortType) => ({
  type: FETCH_CHANGE_SORT_MOVIES,
  payload: sortType,
});

// Удаления фильма из перечня
const movieRemoved = (movieId) => ({
  type: REMOVE_MOVIE,
  payload: movieId,
});

// Добавления в список фильмов для просмотра
const movieAddedToWillWatch = (movieId) => ({
  type: ADD_MOVIE_WILL_WATCH,
  payload: movieId,
});

// Удаление из списка фильмов для просмотра
const movieRemovedToWillWatch = (movieId) => ({
  type: REMOVE_MOVIE_WILL_WATCH,
  payload: movieId,
});

// Удаление всех фильмов для просмотра
const allMoviesAddedToWillWatch = () => ({
  type: REMOVE_ALL_MOVIE_WILL_WATCH,
});

const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

// Класс Сервис
const movieService = new MovieService();

// Получения асинхронных данных через Thunk
const getMovies = () => (dispatch, getState) => {
  // КАКОЙ СПОСОБ ПРАВИЛЬНЫЙ?
  // Данные из Redux store
  const { sortTypeByMovies, page } = getState();

  // КАКОЙ СПОСОБ ПРАВИЛЬНЫЙ?
  // fetchMoviesData(sortTypeByMovies, page)(dispatch);
  dispatch(fetchMovies(sortTypeByMovies, page));
};

// Загрузка данных
const fetchMovies = (sortTypeByMovies, page) => async (dispatch) => {
  try {
    // Загрузки, обнуление первоначального состояния и активация Spinner
    dispatch(moviesRequested());
    // Получения всех данных с Сервера
    const data = await movieService.getResource(sortTypeByMovies, page);
    // Отправка загруженных данных в Reducer
    dispatch(moviesLoaded(data));
  } catch (error) {
    dispatch(moviesError(error));
  }
};

export {
  getMovies,
  moviesChangeSort,
  movieAddedToWillWatch,
  movieRemovedToWillWatch,
  allMoviesAddedToWillWatch,
  movieRemoved,
  setCurrentPage,
};

/*
	const fetchMovies = (sortType = 'default', page = 1) => async (
	dispatch,
	getState
) => {
	try {
		// Данные из Redux store
		const { sortTypeByMovies, page } = getState();

		// Предотвращает повторный запрос при вызове с одинаковым типом сортировки
		if (sortType === sortTypeByMovies && sortTypeByMovies !== 'default') {
			return;
		}

		// Менялся ли тип сортировки
		if (sortType !== 'default') {
			dispatch(moviesChangeSort(sortType));
		}

		// Загрузки, обнуление первоначальное состояния и активация Spinner
		dispatch(moviesRequsted());

		// Получения всех данных с Сервера
		const data = await movieService.getResource(sortType, page);
		console.log(data);

		// Отправка загруженных данных в Reducer
		dispatch(moviesLoaded(data));
	} catch (error) {
		dispatch(moviesError(error));
	}
};

// Загрузка данных
const fetchMovies = (currentSortType = 'default', currentPape = 1) => async (
	dispatch
) => {
	try {
		// Первая ли загрузка ?
		if (currentSortType !== 'default') {
			dispatch(moviesChangeSort(currentSortType));
		}

		// Загрузки, обнуление первоначального состояния и активация Spinner
		dispatch(moviesRequsted());
		// Получения всех данных с Сервера
		const data = await movieService.getResource(currentSortType, currentPape);
		// Отправка загруженных данных в Reducer
		dispatch(moviesLoaded(data));
	} catch (error) {
		dispatch(moviesError(error));
	}
};
*/
