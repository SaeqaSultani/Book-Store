import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../book/Book';

const Books = () => {
  const bookList = useSelector((state) => state.books);
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
