import React, { useState } from 'react';
import Book from '../book/Book';

const Books = () => {
  const Books = [
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

  const [books] = useState(Books);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
