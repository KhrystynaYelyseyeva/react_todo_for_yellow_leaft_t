import React, { useState } from 'react';
import { TodoList } from './TodoList/TodoList';
import { NewTodoForm } from './NewTodoForm/NewTodoForm';
import initialTodos from '../../api/todos';

export const Main = () => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoValues) => {
    const newTodo = {
      ...newTodoValues,
      id: todos.length + 1,
      completed: false,
    };

    setTodos(current => [...current, newTodo]);
  };

  return (
    <main className="Main">
      <NewTodoForm
        addTodo={addTodo}
      />
      {!!todos.length && (
        <TodoList todos={todos} />
      )}
    </main>
  );
};
