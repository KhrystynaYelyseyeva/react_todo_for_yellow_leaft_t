import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { TodoShape } from '../../shapes/TodoShape';

import { TodoList } from '../MainPage/TodoList/TodoList';

export const CompletedPage = memo(({
  isFilter,
  filteredTodos,
  todos,
  onTodoUpdate,
  onTodoDelete,
  onTodoComplete,
  onTodosFilterCompleted,
  // eslint-disable-next-line react/prop-types
  match,
}) => {
  // eslint-disable-next-line react/prop-types
  const { completed } = match.params;

  useEffect(() => {
    onTodosFilterCompleted(!!(+completed));
  }, [completed]);

  return (
    <TodoList
      isFilter={isFilter}
      todos={todos}
      filteredTodos={filteredTodos}
      onTodoUpdate={onTodoUpdate}
      onTodoDelete={onTodoDelete}
      onTodoComplete={onTodoComplete}
    />
  );
});

CompletedPage.propTypes = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
  filteredTodos: PropTypes.arrayOf(TodoShape).isRequired,
  isFilter: PropTypes.bool.isRequired,
  onTodoUpdate: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoComplete: PropTypes.func.isRequired,
  onTodosFilterCompleted: PropTypes.func.isRequired,
};
