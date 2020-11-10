import React, { useState } from 'react';

import { data } from './data';

import { AddProductForm } from './components/AddProductForm';
import { CardList } from './components/CardList';
import { SearchBar } from './components/SearchBar';
import './App.css';

const preparedProducts = data.map((item, index) => ({
  ...item, id: index,
}));

function App() {
  const [products, setProducts] = useState(preparedProducts);
  const [lastId, setLastId] = useState(preparedProducts.length);
  const [searchValue, setSearchValue] = useState('');
  const [pinedProductId, setPinedPropductId] = useState(-1);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const removeProduct = (productId) => {
    const updatedProducts = products.filter(product => (
      product.id !== productId));

    setProducts(updatedProducts);
  };

  const addProduct = (newProduct) => {
    setProducts(prevProducts => [newProduct, ...prevProducts]);

    setLastId(prevLastId => prevLastId + 1);
  };

  const getFilteredProducts = () => {
    const searchedProducts = products.filter(product => (
      product.name.includes(searchValue)
        || product.description.includes(searchValue)));

    if (pinedProductId >= 0) {
      const pinedIndex = searchedProducts.findIndex(product => (
        product.id === pinedProductId));
      const pinedProduct = searchedProducts.splice(pinedIndex, 1);

      return [pinedProduct[0], ...searchedProducts];
    }

    return searchedProducts;
  };

  return (
    <div className="App">
      {
        isOpenForm && <div className="App-cover" />
      }

      <AddProductForm
        lastId={lastId}
        addProdact={addProduct}
        isOpen={isOpenForm}
        toggleForm={setIsOpenForm}
      />

      <SearchBar
        value={searchValue}
        setValue={setSearchValue}
      />

      <CardList
        products={getFilteredProducts()}
        removeProdact={removeProduct}
        setPinedPropductId={setPinedPropductId}
      />
    </div>
  );
}

export default App;
