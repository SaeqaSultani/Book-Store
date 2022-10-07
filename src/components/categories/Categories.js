import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const string = useSelector((state) => state.categories);
  return (
    <div>
      <button type="submit" onClick={() => { dispatch(checkStatus()); }}>
        Check Status
      </button>
      <h3>{string}</h3>
    </div>
  );
};

export default Categories;
