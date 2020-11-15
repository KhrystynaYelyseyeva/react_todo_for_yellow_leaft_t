import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

import { getTodos } from './store';
import { actions as todosActions } from './store/todos';

import './App.css';
import './styles/general.scss';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);

  const addTodo = (todo) => {
    dispatch(todosActions.add(todo));
  };

  const onTodoComplete = (todoId) => {
    dispatch(todosActions.complete(todoId));
  };

  const onTodoUpdate = (todoId, newTitle) => {
    dispatch(todosActions.update(todoId, newTitle));
  };

  const onTodoDelete = (todoId) => {
    dispatch(todosActions.delete(todoId));
  };

  const onTodosFilter = (todoId) => {
    dispatch(todosActions.filter(todoId));
  };

  return (
    <div className="App">
      <Header onTodosFilter={onTodosFilter} />
      <Main
        addTodo={addTodo}
        todos={todos}
        onTodoComplete={onTodoComplete}
        onTodoUpdate={onTodoUpdate}
        onTodoDelete={onTodoDelete}
      />
    </div>
  );
}

export default App;
