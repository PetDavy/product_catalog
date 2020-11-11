import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeValue, validateValue } from '../../actions';

export const InputField = ({ name }) => {
  const values = useSelector(state => state.newProduct);
  const errors = useSelector(state => state.newProduct.errors);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;

    dispatch(changeValue({
      name,
      value,
    }));
  };

  return (
    <label className="InputField form-row">
      {
        name === 'description'
          ? (
            <textarea
              name={name}
              value={values[name]}
              className="form-control"
              placeholder={`Add ${name}`}
              onChange={handleChange}
            />
          ) : (
            <input
              type={name === 'price' ? 'number' : 'text'}
              name={name}
              value={values[name]}
              className={classNames('form-control', {
                'is-invalid': errors[name],
              })}
              aria-describedby="input-feedback"
              placeholder={`Please add ${name} ${name === 'img' ? 'url' : ''}`}
              onChange={handleChange}
              onBlur={() => dispatch(validateValue(name))}
              required
            />
          )
      }
      <div
        className="invalid-feedback"
        id="input-feedback"
      >
        {errors[name]}
      </div>
    </label>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
};
