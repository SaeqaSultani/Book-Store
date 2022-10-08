import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import './AddBooks.css';

const AddBooks = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: '',
    author: '',

  });

  const changeHandler = (e) => {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const AddnewBook = () => {
    const objbook = {
      item_id: uuidv4(),
      title: data.title,
      author: data.author,

    };

    dispatch(addBook(objbook));
    console.log(addBook(objbook));
    setData({
      title: '',
      author: '',

    });
  };

  return (
    <div>
      <hr className="line" />
      <h2 className="add-book">Add a new book</h2>
      <form className="form" method="post" id="bookForm">
        <input
          className="input-1"
          type="text"
          placeholder="Book title"
          value={data.title}
          onChange={changeHandler}
          name="title"
        />
        <input
          className="input-2"
          type="text"
          placeholder="Book author"
          value={data.author}
          onChange={changeHandler}
          name="author"
        />
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
