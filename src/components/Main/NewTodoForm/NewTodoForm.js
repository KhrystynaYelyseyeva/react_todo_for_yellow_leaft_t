import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../Input/Input';
import { Select } from '../../Select/Select';

import './NewTodoForm.scss';

export const NewTodoForm = ({ addTodo }) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const handleChangeInput = ({ target }) => {
    setTitle(target.value);
    setTitleError(false);
  };

  const handleChangeSelector = ({ target }) => {
    setCategory(target.value);
    setCategoryError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) {
      setTitleError(true);

      return;
    }

    if (!category) {
      setCategoryError(true);

      return;
    }

    addTodo({
      title,
      category,
    });

    setCategory('');
    setTitle('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="NewTodoForm">
        <Input
          className="NewTodoForm__input"
          value={title}
          name="title"
          placeholder="Enter new task"
          onChange={handleChangeInput}
        />
        <Select
          className="NewTodoForm__select"
          value={category}
          name="category"
          onChange={handleChangeSelector}
        />
        <button type="submit" className="NewTodoForm__btn">
          +
        </button>
      </form>
      {titleError && <span>Please enter the title</span>}
      {categoryError && <span>Please choose the category</span>}
    </>
  );
};

NewTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
