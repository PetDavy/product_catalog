import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

export const SearchBar = ({ value, setValue }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        value={value}
        type="text"
        placeholder="Shearch the product"
        className="SearchBar__input"
        onChange={handleChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
