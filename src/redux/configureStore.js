import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const root = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});
const store = configureStore({ reducer: root });

export default store;
