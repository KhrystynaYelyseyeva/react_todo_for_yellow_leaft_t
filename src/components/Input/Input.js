import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({
  name,
  value,
  onChange,
  placeholder,
  className,
  type,
  required,
  classNameLabel,
  labelText,
}) => (
  <label htmlFor={name} className={classNameLabel}>
    {labelText}
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      required={required}
    />
  </label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  labelText: PropTypes.string,
  className: PropTypes.string.isRequired,
  classNameLabel: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: '',
  classNameLabel: '',
  labelText: '',
  type: 'text',
  required: false,
};
