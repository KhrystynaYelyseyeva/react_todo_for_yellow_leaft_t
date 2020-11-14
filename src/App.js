import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Contact } from './components/Contact/Contact';

import { getTodos, getFilteredTodos } from './store/index';
import { actions as todosActions } from './store/todos';

import './App.css';
import './styles/general.scss';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const filteredTodos = useSelector(getFilteredTodos);
  const [isFilter, setIsFilter] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);

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

  const onTodosFilterByCategory = (category) => {
    dispatch(todosActions.filterByCategory(category));
  };

  const onTodosFilterByQuery = (query) => {
    dispatch(todosActions.filterByQuery(query));
  };

  const onFilter = (bool) => {
    setIsFilter(bool);
  };

  const handleOpenSidebar = () => {
    setIsOpenSidebar(current => !current);
  };

  const handleOpenContact = () => {
    setIsOpenContact(current => !current);
  };

  return (
    <div className="App">
      <Header
        onTodosFilterByCategory={onTodosFilterByCategory}
        onTodosFilterByQuery={onTodosFilterByQuery}
        onFilter={onFilter}
        handleOpenSidebar={handleOpenSidebar}
      />
      <Main
        addTodo={addTodo}
        isFilter={isFilter}
        todos={todos}
        filteredTodos={filteredTodos}
        onTodoComplete={onTodoComplete}
        onTodoUpdate={onTodoUpdate}
        onTodoDelete={onTodoDelete}
      />
      <Sidebar
        isOpenSidebar={isOpenSidebar}
        handleOpenSidebar={handleOpenSidebar}
        handleOpenContact={handleOpenContact}
      />
      {isOpenContact && (
        <Contact
          handleOpenContact={handleOpenContact}
        />
      )}
    </div>
  );
}

export default App;
