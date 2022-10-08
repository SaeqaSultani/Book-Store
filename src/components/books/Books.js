import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../book/Book';
import { getBooks } from '../../redux/books/books';

const Books = () => {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  },
  []);
  return (
    <div>
      <ul>
        {bookList.map((book) => (
          <li key={book.id}>
            <Book id={book.id} title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
