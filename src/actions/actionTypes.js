// Начало загрузки
export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
// Успешная загрузка (запись в state)
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
// В момент загрузки произошла ошибка
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
// Изменения метода серверной сортировки в момент отправки запроса
export const FETCH_CHANGE_SORT_TYPE_BY_MOVIES = 'FETCH_CHANGE_SORT_TYPE_BY_MOVIES';
// Удаление фильма из каталоге фильмов
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
// Переключение свойства просмотра в каталоге все фильмов
export const TOGGLE_PROPERTY_WILL_WATCH_MOVIE = 'TOGGLE_PROPERTY_WILL_WATCH_MOVIE';
// Все фильмы withWatch - false
export const RESET_PROPERTY_WILL_WATCH_MOVIE = 'RESET_PROPERTY_WILL_WATCH_MOVIE';

// Установка выбранной страницы
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
// Добавления фильма в список для просмотра
export const ADD_MOVIE_WILL_WATCH = 'ADD_MOVIE_WILL_WATCH';
// Удаления фильма из списка для просмотра
export const REMOVE_MOVIE_WILL_WATCH = 'REMOVE_MOVIE_WILL_WATCH';
// Удаления всех фильмов из списка для просмотра
export const REMOVE_ALL_MOVIE_WILL_WATCH = 'REMOVE_ALL_MOVIE_WILL_WATCH';

export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
