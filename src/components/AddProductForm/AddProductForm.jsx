import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { InputField } from '../InputField';
import './AddProductForm.css';

export const AddProductForm = ({ addProdact, lastId, isOpen, toggleForm }) => {
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.values(errors).some(error => error)) {
      return;
    }

    addProdact({
      id: lastId,
      img,
      name,
      description,
      price: Number(price),
    });

    setImg('');
    setName('');
    setDescription('');
    setPrice(0);

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
        {isOpen ? 'X' : '+'}
      </button>

      <h5 className="display-5 lead mb-4 text-center"> Add product details</h5>

      <form onSubmit={handleSubmit}>

        <InputField
          value={img}
          name="image"
          setValue={setImg}
          errors={errors}
          setErrors={setErrors}
        />

        <InputField
          value={name}
          name="title"
          setValue={setName}
          errors={errors}
          setErrors={setErrors}
        />

        <InputField
          value={description}
          name="description"
          setValue={setDescription}
          errors={errors}
          setErrors={setErrors}
        />

        <InputField
          value={price}
          name="price"
          setValue={setPrice}
          errors={errors}
          setErrors={setErrors}
        />

        <button
          type="submit"
          className="btn btn-primary w-100 mt-4"
        >
          Add Prodact
        </button>
      </form>
    </div>
  );
};

AddProductForm.propTypes = {
  addProdact: PropTypes.func.isRequired,
  lastId: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
};
