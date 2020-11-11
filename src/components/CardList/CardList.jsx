import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../Card';
import './CardList.css';

export const CardList = () => {
  const products = useSelector(({ productList }) => productList.sortedProducts);

  if (!products.length) {
    return <h1 className="display-3 mt-5 text-center">There is no product</h1>;
  }

  return (
    <ul className="CardList">
      {
        products.map(product => (
          <li key={product.id}>
            <Card
              product={product}
            />
          </li>
        ))
      }
    </ul>
  );
};
