import { CHANGE_VALUE, VALIDATE_VALUE, CLEAR_FORM } from '../actions/types';

const initialState = {
  id: 0,
  img: '',
  title: '',
  description: '',
  price: '',
  errors: {},
};

export const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      if (action.payload) {
        const { name } = action.payload;

        return {
          ...state,
          [name]: action.payload.value,
        };
      }

      return state;

    case VALIDATE_VALUE:
      if (!state[action.payload]) {
        const name = action.payload;

        return {
          ...state,
          errors: {
            ...state.errors,
            [name]: `Please add ${name}`,
          },
        };
      }

      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload]: '',
        },
      };

    case CLEAR_FORM:
      return initialState;

    default:
      return state;
  }
};
