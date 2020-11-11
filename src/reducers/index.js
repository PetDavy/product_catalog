import { combineReducers } from 'redux';

import { productsReducer } from './products';
import { addProductReducer } from './addProduct';

export const rootReducer = combineReducers({
  productList: productsReducer,
  newProduct: addProductReducer,
});
