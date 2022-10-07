import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const AddBooks = () => {
  const dispatch = useDispatch();
  const AddnewBook = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (title !== '' && author !== '') {
      dispatch(addBook({ id: parseInt(10, uuidv4()), title, author }));
    }
  };

  return (
    <div>
      <form className="form" method="post" id="bookForm">
        <h2 className="add-book">Add a new book</h2>
        <input className="input" type="text" id="title" placeholder="Book title" />
        <input className="input" type="text" id="author" placeholder="Book author" />
        <button
          className="input-submit"
          id="btnAdd"
          type="button"
          onClick={() => {
            AddnewBook();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
