import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';
import './Categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const string = useSelector((state) => state.categories);
  return (
    <div className="content">
      <button className="btn" type="submit" onClick={() => { dispatch(checkStatus()); }}>
        Check Status
      </button>
      <h3>{string}</h3>
    </div>
  );
};

export default Categories;
