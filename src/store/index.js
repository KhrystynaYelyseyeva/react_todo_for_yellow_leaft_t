import { createStore, combineReducers } from 'redux';

import todosReducer from './todos';

// #region selectors
export function getTodos(state) {
  return state.todosState.todos;
}

export function getFilteredTodos(state) {
  return state.todosState.filteredTodos;
}
// #endregin

const reducer = combineReducers({
  todosState: todosReducer,
});

const store = createStore(reducer);

export default store;
