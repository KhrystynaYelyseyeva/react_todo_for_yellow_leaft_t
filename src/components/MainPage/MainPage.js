import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { TodoShape } from '../../shapes/TodoShape';
import { TodoList } from './TodoList/TodoList';
import { NewTodoForm } from './NewTodoForm/NewTodoForm';

import './MainPage.scss';

const INCREMENT_NEW_ID = 1;

export const MainPage = memo(({
  addTodo,
  isFilter,
  onFilter,
  todos,
  filteredTodos,
  onTodoDelete,
  onTodoUpdate,
  onTodoComplete,
}) => {
  useEffect(() => {
    onFilter(false);
  }, []);

  return (
    <div className="MainPage">
      <NewTodoForm
        addTodo={addTodo}
        newId={todos.length + INCREMENT_NEW_ID}
      />
      {!!todos.length && (
        <TodoList
          isFilter={isFilter}
          todos={todos}
          filteredTodos={filteredTodos}
          onTodoUpdate={onTodoUpdate}
          onTodoDelete={onTodoDelete}
          onTodoComplete={onTodoComplete}
        />
      )}
    </div>
  );
});

MainPage.propTypes = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
  filteredTodos: PropTypes.arrayOf(TodoShape).isRequired,
  isFilter: PropTypes.bool.isRequired,
  addTodo: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  onTodoUpdate: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoComplete: PropTypes.func.isRequired,
};
