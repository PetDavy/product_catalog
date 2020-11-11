import {
  REMOVE_PRODUCT,
  PIN_PRODUCT,
  SORT_PRODUCTS,
  SEARCH,
  ADD_PRODUCT,
} from './types';

export const removeProduct = id => ({
  type: REMOVE_PRODUCT,
  payload: id,
});

export const pinProduct = id => ({
  type: PIN_PRODUCT,
  payload: id,
});

export const sortProducts = () => ({
  type: SORT_PRODUCTS,
});

export const search = value => ({
  type: SEARCH,
  payload: value,
});

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product,
});
