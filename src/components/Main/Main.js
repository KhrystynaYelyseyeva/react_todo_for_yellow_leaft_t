import React from 'react';
import PropTypes from 'prop-types';
import { TodoShape } from '../../shapes/TodoShape';
import { TodoList } from './TodoList/TodoList';
import { NewTodoForm } from './NewTodoForm/NewTodoForm';

const INCREMENT_NEW_ID = 1;

export const Main = ({
  addTodo,
  isFilter,
  todos,
  filteredTodos,
  onTodoDelete,
  onTodoUpdate,
  onTodoComplete,
}) => (
  <main className="Main">
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
  </main>
);

Main.propTypes = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
  filteredTodos: PropTypes.arrayOf(TodoShape).isRequired,
  isFilter: PropTypes.bool.isRequired,
  addTodo: PropTypes.func.isRequired,
  onTodoUpdate: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoComplete: PropTypes.func.isRequired,
};
