import React from 'react';
import PropTypes from 'prop-types';
import { TodoShape } from '../../shapes/TodoShape';
import { TodoList } from './TodoList/TodoList';
import { NewTodoForm } from './NewTodoForm/NewTodoForm';

const INCREMENT_NEW_ID = 1;

export const Main = ({
  addTodo,
  todos,
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
        todos={todos}
        onTodoUpdate={onTodoUpdate}
        onTodoDelete={onTodoDelete}
        onTodoComplete={onTodoComplete}
      />
    )}
  </main>
);

Main.propTypes = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
  addTodo: PropTypes.func.isRequired,
  onTodoUpdate: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoComplete: PropTypes.func.isRequired,
};
