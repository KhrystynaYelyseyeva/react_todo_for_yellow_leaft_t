import React, { memo } from 'react';
import PropTypes from 'prop-types';

import state from '../../api/initialSrate';

export const Select = memo(({
  name,
  value,
  onChange,
  className,
  defaultValue,
}) => (
  <label htmlFor={name} className={`${className}-label`}>
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className={className}
    >
      <option value="">
        {defaultValue}
      </option>
      {state.categories.map(category => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  </label>
));

Select.propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  defaultValue: 'Choose category',
};
