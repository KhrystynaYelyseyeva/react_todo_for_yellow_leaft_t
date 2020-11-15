import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../Input/Input';
import { Select } from '../../Select/Select';

import './NewTodoForm.scss';

export const NewTodoForm = memo(({ addTodo, newId }) => {
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
      completed: false,
      id: newId,
    });

    setCategory('');
    setTitle('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="NewTodoForm">
        <Input
          className="NewTodoForm__input"
          classNameLabel="NewTodoForm__input-label"
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
      {titleError && (
        <span className="Error-massage">Please enter the title</span>
      )}
      {categoryError && (
        <span className="Error-massage">Please choose the category</span>
      )}
    </>
  );
});

NewTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  newId: PropTypes.number.isRequired,
};
