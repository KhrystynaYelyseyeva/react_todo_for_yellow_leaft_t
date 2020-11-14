import initialState from '../api/initialSrate';

const ADD = 'todos/ADD';
const COMPLETE = 'todos/COMPLETE';
const UPDATE = 'todos/UPDATE';
const DELETE = 'todos/DELETE';
const FILTER_BY_CATEGORY = 'todos/FILTER_BY_CATEGORY';
const FILTER_BY_QUERY = 'todos/FILTER_BY_QUERY';

export const actions = {
  add: todo => ({
    type: ADD,
    todo,
  }),
  complete: todoId => ({
    type: COMPLETE,
    todoId,
  }),
  update: (todoId, newTitle) => ({
    type: UPDATE,
    todoId,
    newTitle,
  }),
  delete: todoId => ({
    type: DELETE,
    todoId,
  }),
  filterByCategory: category => ({
    type: FILTER_BY_CATEGORY,
    category,
  }),
  filterByQuery: query => ({
    type: FILTER_BY_QUERY,
    queryRegular: new RegExp(query, 'gi'),
  }),
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.todoId) {
            const currentCompleted = todo.completed;

            return {
              ...todo,
              completed: !currentCompleted,
            };
          }

          return todo;
        }),
      };
    case UPDATE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              title: action.newTitle,
            };
          }

          return todo;
        }),
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.todoId),
      };
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filteredTodos: state.todos
          .filter(todo => todo.category === action.category),
      };
    case FILTER_BY_QUERY:
      return {
        ...state,
        filteredTodos: state.todos
          .filter(todo => action.queryRegular.test(todo.title)),
      };
    default:
      return state;
  }
};

export default todosReducer;
