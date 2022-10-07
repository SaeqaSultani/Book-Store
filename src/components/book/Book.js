import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;

  const remove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="parent">
      <div className="list">
        <div className="div-text">
          <p>{title}</p>
          <p>by</p>
          <p>{author}</p>
        </div>
        <button className="remove" type="button" onClick={remove}>Remove</button>
      </div>
      <div className="items">
        <div className="first">
          <div className="progress" />
          <div className="progress-text">
            <p>64%</p>
            <p>Completed</p>
          </div>
        </div>
        <div className="line" />
        <div className="second" />
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
