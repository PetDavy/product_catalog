import React from 'react';
import PropTypes from 'prop-types';
import { ProductShape } from '../shapes/ProductShape';
import { Card } from '../Card';
import './CardList.css';

export const CardList = ({ products, removeProdact, setPinedPropductId }) => (
  <ul className="CardList">
    {
      products.map(product => (
        <li key={product.id}>
          <Card
            product={product}
            setPinedPropductId={setPinedPropductId}
            removeProdact={removeProdact}
          />
        </li>
      ))
    }
  </ul>
);

CardList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(ProductShape)).isRequired,
  removeProdact: PropTypes.func.isRequired,
  setPinedPropductId: PropTypes.func.isRequired,
};
