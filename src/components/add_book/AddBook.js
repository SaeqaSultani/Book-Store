import React from 'react';

const AddBook = () => (
  <div>
    <form className="form" method="post" id="bookForm">
      <h2 className="add-book">Add a new book</h2>
      <input className="input" type="text" id="title" placeholder="Book title" />
      <input className="input" type="text" id="author" placeholder="Book author" />
      <button className="input-submit" id="btnAdd" type="button">Add</button>
    </form>
  </div>
);

export default AddBook;
