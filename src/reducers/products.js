import { data } from '../data';
import {
  REMOVE_PRODUCT,
  PIN_PRODUCT,
  SORT_PRODUCTS,
  SEARCH,
  ADD_PRODUCT,
} from '../actions/types';

const preparedData = data.map((item, index) => ({
  ...item, id: index + 1,
}));

const initialState = {
  products: preparedData,
  sortedProducts: preparedData,
  lastId: preparedData.length + 1,
  pinedProductId: 0,
  searchValue: '',
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_PRODUCT:

      return {
        ...state,
        products: state.products.filter(product => (
          product.id !== action.payload)),
        pinedProductId: state.pinedProductId === action.payload
          ? 0
          : state.pinedProductId,
      };

    case PIN_PRODUCT:
      return {
        ...state,
        pinedProductId: action.payload,
      };

    case SORT_PRODUCTS:
      if (!state.pinedProductId) {
        return {
          ...state,
          sortedProducts: state.products,
        };
      }

      return {
        ...state,
        sortedProducts: [
          state.products.find(product => product.id === state.pinedProductId),
          ...state.products.filter(product => (
            product.id !== state.pinedProductId)),
        ],
      };

    case SEARCH:
      if (action.payload) {
        const filteredProducts = state.products.filter((product) => {
          const formatedName = product.title.toLowerCase();
          const formatedDescription = product.description.toLowerCase();
          const formatedValue = action.payload.toLowerCase();

          return formatedName.includes(formatedValue)
              || formatedDescription.includes(formatedValue);
        });

        return {
          ...state,
          sortedProducts: filteredProducts,
          searchValue: action.payload,
        };
      }

      return {
        ...state,
      };

    case ADD_PRODUCT:

      return {
        ...state,
        products: [
          ...state.products,
          {
            ...action.payload,
            id: state.lastId,
          },
        ],
        lastId: state.lastId + 1,
      };

    default:
      return state;
  }
};
