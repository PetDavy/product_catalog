import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, sortProducts, clearForm } from '../../actions';

import { InputField } from '../InputField';
import './AddProductForm.css';

export const AddProductForm = ({ isOpen, toggleForm }) => {
  const newProduct = useSelector(state => state.newProduct);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.values(newProduct.errors).some(error => error)) {
      return;
    }

    dispatch(addProduct({
      ...newProduct,
    }));
    dispatch(sortProducts());
    dispatch(clearForm());

    toggleForm(false);
  };

  return (
    <div
      className={classNames('AddProdactForm', {
        'AddProdactForm-open': isOpen,
      })}
    >
      <button
        type="button"
        className="btn-toggleForm"
        onClick={() => toggleForm(!isOpen)}
      >
        {isOpen
          ? <i className="fas fa-times" />
          : <i className="fas fa-plus" />}
      </button>

      <h5 className="display-5 lead mb-4 text-center"> Add product details</h5>

      <form onSubmit={handleSubmit}>

        <InputField name="img" />
        <InputField name="title" />
        <InputField name="description" />
        <InputField name="price" />

        <button
          type="submit"
          className="btn btn-primary w-100 mt-4"
        >
          Add New Prodact
        </button>
      </form>
    </div>
  );
};

AddProductForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
};
