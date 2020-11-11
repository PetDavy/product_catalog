import React, { useState } from 'react';

import { AddProductForm } from './components/AddProductForm';
import { CardList } from './components/CardList';
import { SearchBar } from './components/SearchBar';
import './App.css';

function App() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <div className="App">
      {
        isOpenForm && <div className="App-cover" />
      }

      <AddProductForm
        isOpen={isOpenForm}
        toggleForm={setIsOpenForm}
      />

      <SearchBar />

      <CardList />
    </div>
  );
}

export default App;
