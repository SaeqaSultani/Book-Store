import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import './Book.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, author,
  } = props;

  const remove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="card">
      <div>
        <p className="type">Action</p>
        <h1 className="title">{title}</h1>
        <p className="author">{author}</p>
        <div className="card-add">
          <p> comments</p>
          <hr />
          <button
            type="button"
            onClick={remove}
          >
            Remove
          </button>
          <hr />
          <p>Edit</p>
        </div>
      </div>
      <div className="completed">
        <div className="panel-bg">
          <hr />
        </div>
        <div className="completed-num">
          <h1> 60%</h1>
          <p>Completed</p>
        </div>
        <hr className="line-2" />
        <div className="progress">
          <h3>CURRENT CHAPTER</h3>
          <p>Intruduction</p>
          <button type="button">update Progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
