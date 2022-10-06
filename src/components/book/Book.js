import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;

  return (
    <div className="parent">
      <div className="list">
        <div className="div-text">
          <p>{title}</p>
          <p>by</p>
          <p>{author}</p>
        </div>
        <button className="remove" type="button">Remove</button>
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
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
