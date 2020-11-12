import React from 'react';
import classNames from 'classnames/bind';
import { TodoShape } from '../../../../shapes/TodoShape';

import './Todo.scss';

export const Todo = ({ title, completed, category }) => (
  <div
    className={classNames(
      'Todo',
      {
        'Todo--checked': completed,
        'Todo--unchecked': !completed,
      },
    )}
  >
    <label className="Todo__checkbox-label">
      <input className="Todo__checkbox" type="checkbox" readOnly />
      <span />
    </label>

    <label className="Todo__title-label">
      <input className="Todo__title" type="text" value={title} />
    </label>

    <span className="Todo__category">
      {category}
    </span>

    <button
      className="Todo__delete-btn"
      type="button"
    >
      X
    </button>
  </div>
);

Todo.propTypes = TodoShape;
