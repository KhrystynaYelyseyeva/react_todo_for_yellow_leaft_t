import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

import { Select } from '../Select/Select';
import { Input } from '../Input/Input';

import './Filters.scss';

export const Filters = memo(({
  onTodosFilterByCategory,
  onTodosFilterByQuery,
  onFilter,
}) => {
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');

  const handleChangeSelector = ({ target }) => {
    if (target.value === '') {
      onFilter(false);
      setCategory(target.value);

      return;
    }

    onFilter(true);
    setCategory(target.value);
    onTodosFilterByCategory(target.value);
  };

  const handleChangeInput = ({ target }) => {
    if (target.value === '') {
      onFilter(false);
      setQuery(target.value);

      return;
    }

    onFilter(true);
    setQuery(target.value);
    onTodosFilterByQuery(target.value);
  };

  return (
    <div className="Filters">
      <Select
        className="Filters__select"
        onChange={handleChangeSelector}
        value={category}
        name="category"
        defaultValue="Filter by categories"
      />

      <Input
        className="Filters__input"
        classNameLabel="Header__input-label"
        placeholder="Filter by todo title"
        onChange={handleChangeInput}
        name="search"
        value={query}
      />
    </div>
  );
});

Filters.propTypes = {
  onTodosFilterByCategory: PropTypes.func.isRequired,
  onTodosFilterByQuery: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};
