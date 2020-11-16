import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { MainPage } from './components/MainPage/MainPage';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Contact } from './components/Contact/Contact';
import { CompletedPage } from './components/CompletedPage/CompletedPage';
import { Filters } from './components/Filters/Filters';

import { ThemeProvider } from './context/ThemeContext';

import { getTodos, getFilteredTodos } from './store/index';
import { actions as todosActions } from './store/todos';

import './App.scss';
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

  const onTodosFilterCompleted = (completed) => {
    onFilter(true);
    dispatch(todosActions.filterByCompleted(completed));
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
    <ThemeProvider>
      <>
        <Header
          onTodosFilterByCategory={onTodosFilterByCategory}
          onTodosFilterByQuery={onTodosFilterByQuery}
          onFilter={onFilter}
          handleOpenSidebar={handleOpenSidebar}
        />
        <main>
          <h2>
            Todos
            <Route path="/todos/completed/1"> - Completed</Route>
            <Route path="/todos/completed/0"> - Uncompleted</Route>
          </h2>

          <Switch>
            <Route
              path="/todos/completed/:completed"
              render={({ match }) => (
                <CompletedPage
                  match={match}
                  todos={todos}
                  filteredTodos={filteredTodos}
                  isFilter={isFilter}
                  onTodoComplete={onTodoComplete}
                  onTodoUpdate={onTodoUpdate}
                  onTodoDelete={onTodoDelete}
                  onTodosFilterCompleted={onTodosFilterCompleted}
                />
              )}
            />

            <Route
              path="/todos"
              render={() => (
                <>
                  <Filters
                    onTodosFilterByCategory={onTodosFilterByCategory}
                    onTodosFilterByQuery={onTodosFilterByQuery}
                    onFilter={onFilter}
                  />
                  <MainPage
                    addTodo={addTodo}
                    isFilter={isFilter}
                    onFilter={onFilter}
                    todos={todos}
                    filteredTodos={filteredTodos}
                    onTodoComplete={onTodoComplete}
                    onTodoUpdate={onTodoUpdate}
                    onTodoDelete={onTodoDelete}
                  />
                </>
              )}
            />

            <Redirect to="/todos" />
          </Switch>
        </main>

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
      </>
    </ThemeProvider>
  );
}

export default App;
