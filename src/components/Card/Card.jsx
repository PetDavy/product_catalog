import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeProduct, sortProducts, pinProduct } from '../../actions';
import { ProductShape } from '../shapes/ProductShape';
import './Card.css';

export const Card = ({ product }) => {
  const { id, img, title, description, price } = product;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeProduct(id));
    dispatch(sortProducts());
  };

  const handlePin = () => {
    dispatch(pinProduct(id));
    dispatch(sortProducts());
  };

  return (
    <div className="Card card">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{`Price: ${price} $`}</p>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDelete}
        >
          Delete
        </button>

        <button
          type="button"
          className="btn btn-outline-primary float-right"
          onClick={handlePin}
        >
          Pin product
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.shape(ProductShape).isRequired,
};
