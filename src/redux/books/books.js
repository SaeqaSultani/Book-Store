// action types
const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';
const initialState = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzzane Collins',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzzane Collins',
  },
];

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// action creators
export const addBook = (book) => (dispatch) => {
  dispatch({
    type: ADD_BOOK,
    book,
  });
};

export const removeBook = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_BOOK,
    id,
  });
};

export default reducer;
