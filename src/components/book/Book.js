import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;

  return (
    <div className="list">
      <div className="div-text">
        <p>{title}</p>
        <p>by</p>
        <p>{author}</p>
      </div>
      <button className="remove" type="button">Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
