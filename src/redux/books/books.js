import { createAsyncThunk } from '@reduxjs/toolkit';

// action types
const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';
const GET_BOOK = 'books/books/GET_BOOK';
const initialState = [];
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JR4s43qJY97uAeZbC19g/books';

// thunk
export const getBooks = createAsyncThunk(
  GET_BOOK,
  async (args, { dispatch }) => {
    const response = await fetch(url);
    const data = await response.json();

    const books = Object.keys(data).map((key) => ({
      id: key,
      ...data[key][0],
    }));

    dispatch({ type: GET_BOOK, books });

    return books;
  },
);

// reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOK:
      return action.books;
    default:
      return state;
  }
};

// action creators
export const addBook = (book) => (dispatch) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => dispatch({
    type: ADD_BOOK,
    book,
  }));

  dispatch(getBooks());
};

export const removeBook = (id) => (dispatch) => {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => dispatch({
    type: REMOVE_BOOK,
    id,
  }));
};

export default booksReducer;
