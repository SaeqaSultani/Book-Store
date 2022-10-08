import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../book/Book';
import { getBooks } from '../../redux/books/books';
import './Books.css';

const Books = () => {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  },
  []);
  console.log(bookList);
  return (
    <div>
      <ul>
        {bookList.map((book) => (
          <li key={book.item_id}>
            <Book id={book.item_id} title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
