import React from 'react';
import PropTypes from 'prop-types';
import { ProductShape } from '../shapes/ProductShape';

export const Card = ({ product, removeProdact, setPinedPropductId }) => {
  const { id, img, name, description, price } = product;

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{`Price: ${price}`}</p>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => removeProdact(id)}
        >
          Delete
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setPinedPropductId(id)}
        >
          Pin the Prodact
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.shape(ProductShape).isRequired,
  removeProdact: PropTypes.func.isRequired,
  setPinedPropductId: PropTypes.func.isRequired,
};
