import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// Синхронизация LocalStore с Redux store
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  movieListReducer,
  pageReducer,
  sortTypeByMovieReducer,
  movieWillWatchListReducer,
} from './reducers';

// Persisted - организовать долговременное хранение

// Настройки redux-persist
const persistConfig = {
  key: 'movieWillWatchList', // ключ по которому данные будут лежать в LocalStore
  storage,
};

const rootReducer = combineReducers({
  movieList: movieListReducer,
  pageInfo: pageReducer,
  sortType: sortTypeByMovieReducer,
  movieWillWatchList: persistReducer(persistConfig, movieWillWatchListReducer),
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export const persistor = persistStore(store);
