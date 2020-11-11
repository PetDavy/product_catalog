import { CHANGE_VALUE, VALIDATE_VALUE, CLEAR_FORM } from './types';

export const changeValue = data => ({
  type: CHANGE_VALUE,
  payload: data,
});

export const validateValue = name => ({
  type: VALIDATE_VALUE,
  payload: name,
});

export const clearForm = () => ({
  type: CLEAR_FORM,
});
