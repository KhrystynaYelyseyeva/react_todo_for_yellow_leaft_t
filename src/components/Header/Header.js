import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Select } from '../Select/Select';
import { Input } from '../Input/Input';

import './Header.scss';

export const Header = ({
  onTodosFilterByCategory,
  onTodosFilterByQuery,
  onFilter,
  handleOpenSidebar,
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
    <header className="Header">
      <button
        type="button"
        className="closed-burger"
        onClick={handleOpenSidebar}
      >
        <div className="closed-burger__line closed-burger__line--first" />
        <div className="closed-burger__line closed-burger__line--second" />
        <div className="closed-burger__line closed-burger__line--third" />
      </button>

      <Select
        className="Header__select"
        onChange={handleChangeSelector}
        value={category}
        name="category"
        defaultValue="Filter by categories"
      />

      <Input
        className="Header__input"
        placeholder="Filter by todo title"
        onChange={handleChangeInput}
        name="search"
        value={query}
      />

      <button type="button" className="Header__btn Header__btn--dark">
        switch&nbsp;
        <span>DARK</span>
      </button>
    </header>
  );
};

Header.propTypes = {
  onTodosFilterByCategory: PropTypes.func.isRequired,
  onTodosFilterByQuery: PropTypes.func.isRequired,
  handleOpenSidebar: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};
