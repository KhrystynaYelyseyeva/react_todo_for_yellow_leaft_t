import { createStore, combineReducers } from 'redux';

import todosReducer from './todos';

// #region selectors
export function getTodos(state) {
  return state.todos;
}
// #endregin

const reducer = combineReducers({
  todos: todosReducer,
});

const store = createStore(reducer);

export default store;
