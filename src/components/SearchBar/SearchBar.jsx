import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../../actions';
import './SearchBar.css';

export const SearchBar = () => {
  const imputValue = useSelector(state => state.searchValue);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;

    dispatch(search(value));
  };

  return (
    <div className="SearchBar mt-4">
      <input
        value={imputValue}
        type="text"
        placeholder="Shearch the product"
        className="SearchBar-input"
        onChange={handleChange}
      />
    </div>
  );
};
