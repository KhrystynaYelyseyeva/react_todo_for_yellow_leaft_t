import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ name, value, onChange, placeholder, className }) => (
  <label htmlFor={name} className={`${className}-label`}>
    <input
      type="text"
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  </label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
