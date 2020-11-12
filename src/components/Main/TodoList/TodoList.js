import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { TodoShape } from '../../../shapes/TodoShape';
import { Todo } from './Todo/Todo';

export const TodoList = ({
  todos,
  onTodoDelete,
  onTodoComplete,
  onTodoUpdate,
}) => (
  <ul className="list">
    {
      todos.map(todo => (
        <li
          className={
            classNames('list__item item', { 'item--completed': todo.completed })
          }
          key={todo.id}
        >
          <Todo
            todo={todo}
            onTodoComplete={onTodoComplete}
            onTodoUpdate={onTodoUpdate}
            onTodoDelete={onTodoDelete}
          />
        </li>
      ))
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
  onTodoUpdate: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoComplete: PropTypes.func.isRequired,
};
