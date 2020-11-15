import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { TodoShape } from '../../../../shapes/TodoShape';

import './Todo.scss';

export const Todo = memo(({
  todo,
  onTodoDelete,
  onTodoUpdate,
  onTodoComplete,
}) => {
  const { id, title, completed, category } = todo;

  return (
    <div className="Todo">
      <label className="Todo__checkbox-label">
        <input
          className="Todo__checkbox"
          type="checkbox"
          checked={completed}
          readOnly
          onChange={() => onTodoComplete(id)}
        />
        <span />
      </label>

      <label className="Todo__title-label">
        <input
          className={classNames(
            'Todo__title',
            {
              'Todo__title--is-completed': completed,
            },
          )}
          type="text"
          value={title}
          onChange={({ target }) => onTodoUpdate(id, target.value)}
        />
      </label>

      <span className={classNames(
        'Todo__category',
        {
          'Todo__category--is-completed': completed,
        },
      )}
      >
        {category}
      </span>

      <button
        className="Todo__delete-btn"
        type="button"
        onClick={() => onTodoDelete(id)}
      >
        X
      </button>
    </div>
  );
});

Todo.propTypes = {
  todo: TodoShape.isRequired,
  onTodoUpdate: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoComplete: PropTypes.func.isRequired,
};
