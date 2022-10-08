import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const AddBooks = () => {
  const dispatch = useDispatch();
  const AddnewBook = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    const objbook = {
      id: uuidv4(),
      title,
      author,
    };

    if (title !== '' && author !== '') {
      console.log(objbook);
      dispatch(addBook(objbook));
    }
  };

  return (
    <div>
      <hr className="line" />
      <h2 className="add-book">Add a new book</h2>
      <form className="form" method="post" id="bookForm">
        <input className="input-1" type="text" id="title" placeholder="Book title" />
        <input className="input-2" type="text" id="author" placeholder="Book author" />
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
