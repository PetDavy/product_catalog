import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './InputField.css';

export const InputField = ({ value, name, setValue, errors, setErrors }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const validateValue = () => {
    if (!value) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: `Please add ${name}`,
      }));

      return;
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  return (
    <label className="InputField form-row">
      {
        name === 'description'
          ? (
            <textarea
              name={name}
              value={value}
              className="form-control"
              placeholder={`Please add ${name}`}
              onChange={handleChange}
            />
          ) : (
            <input
              type={name === 'price' ? 'number' : 'text'}
              name={name}
              value={value}
              className={classNames('form-control', {
                'is-invalid': errors[name],
              })}
              aria-describedby="input-feedback"
              placeholder={`Please add ${name}`}
              onChange={handleChange}
              onBlur={validateValue}
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
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  setErrors: PropTypes.func.isRequired,
};
