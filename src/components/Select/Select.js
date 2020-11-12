import React from 'react';
import PropTypes from 'prop-types';

import { categories } from '../../api/categories';

export const Select = ({ name, value, onChange, className }) => (
  <label htmlFor={name}>
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className={className}
    >
      <option value="">
        Choose category
      </option>
      {categories.map(category => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  </label>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
