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
} from '../actions/actionTypes';

const initialState = {
  movies: [], // перечень фильмов (загружаемые с сервера)
  loading: false,
  error: null,
  movieWillWatch: [], // список для просмотра
  sortTypeByMovies: 'popularity', // default
  page: 1,
  totalPages: 0,
};

const state = {
  movieList: {
    movies: [],
    loading: false,
    error: null,
  },
  page: {
    currentPage: 1,
    totalPages: 0,
  },
  sortTypeByMovies: {
    sortType: 'popularity',
  },
  movieWillWatchList: {
    moviesWillWatch: [],
  },
};

// Удаления фильма из перечня
const removeMovie = (movies, movieId) => movies.filter((movie) => movie.id !== movieId);

// Переключатель свойства у выбранного фильма
const togglePropertyWillWatch = (movies, movieId) => {
  const findMovie = movies.find((movie) => movie.id === movieId);

  // Если фильм был удален из перечня фильмов и переключать его обратно не нужно
  if (findMovie === undefined) {
    return;
  }

  const updateMovie = { ...findMovie, willWatch: !findMovie.willWatch };
  return updateMovie;
};

// Добавления в перечень всех фильмов, фильма который добавлен в список для просмотра
const updateMovies = (movies, updateMovie, movieId) => {
  const movieIndex = movies.findIndex((movie) => movie.id === movieId);
  return [
    ...movies.slice(0, movieIndex),
    updateMovie, // новый фильм с переключенным состоянием willWatch
    ...movies.slice(movieIndex + 1),
  ];
};

// Переключение свойства (willWatch) в перечни всех фильмов которые добавлены в список для просмотра
const checkPropertyWillWatch = (movies, movieWillWatch) => {
  // Если список фильмов для просмотра пуст
  if (!movieWillWatch.length) {
    return movies;
  }

  // id всех фильмов добавленных в список для просмотра
  const idMoviesWillWatch = movieWillWatch.map((item) => item.id);

  // Новый массив movies с включенными свойством willWatch
  return movies.reduce(
    (newMovies, item) =>
      idMoviesWillWatch.includes(item.id)
        ? newMovies.concat({ ...item, willWatch: true })
        : newMovies.concat(item),
    []
  );
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state, // Копируем все свойства, которые мы не меняем
        movies: [],
        loading: true,
        error: null,
      };

    case FETCH_MOVIES_SUCCESS:
      // Полученные c сервера данные (фильмы)
      const { movies, page, totalPages } = action.payload;

      // МОЖНО ли производить какие-нибудь манипуляции с данными которые приходят через
      // payload, или нельзя потомучто Reducer перестает быть чистой функцией

      return {
        ...state,
        movies: checkPropertyWillWatch(movies, state.movieWillWatch),
        loading: false,
        error: null,
        page,
        totalPages,
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        movies: [],
        loading: false,
        error: action.payload,
      };

    case FETCH_CHANGE_SORT_MOVIES:
      return {
        ...state,
        sortTypeByMovies: action.payload,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case REMOVE_MOVIE:
      return {
        ...state,
        movies: removeMovie(state.movies, action.payload),
      };

    case ADD_MOVIE_WILL_WATCH:
      // Из movies - с сервера
      const movieId = action.payload;

      // Меняю состояние состояние willWatch у выбранного, добавляемого фильма в список для просмотра
      // в перечне всех фильмов
      const updateMovie = togglePropertyWillWatch(state.movies, movieId);

      return {
        ...state,
        movies: updateMovies(state.movies, updateMovie, movieId),
        movieWillWatch: [...state.movieWillWatch, updateMovie],
      };

    case REMOVE_MOVIE_WILL_WATCH: {
      // id выбранного фильма action.payload
      const movieId = action.payload;

      // Удаление выбранного фильма из списка для просмотра
      const movieWillWatch = removeMovie(state.movieWillWatch, movieId);

      // Переключения состояния willWatch у выбранного, удаляемого фильма
      const updateMovie = togglePropertyWillWatch(state.movies, movieId);

      // Существует ли фильм добавленный в список для просмотра, в перечни всех фильмов
      const movies = updateMovie
        ? updateMovies(state.movies, updateMovie, movieId)
        : state.movies;

      return {
        ...state,
        movies,
        movieWillWatch,
      };
    }

    case REMOVE_ALL_MOVIE_WILL_WATCH:
      const allMovieWillWatchReset = state.movies.map((movie) => ({
        ...movie,
        willWatch: false,
      }));

      return {
        ...state,
        movies: allMovieWillWatchReset,
        movieWillWatch: [],
      };

    default:
      return state;
  }
};
