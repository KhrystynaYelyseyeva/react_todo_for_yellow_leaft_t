import initialTodos from '../api/todos';

const ADD = 'todos/ADD';
const COMPLETE = 'todos/COMPLETE';
const UPDATE = 'todos/UPDATE';
const DELETE = 'todos/DELETE';
const FILTER = 'todos/FILTER';

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
  filter: category => ({
    type: FILTER,
    category,
  }),
};

const todosReducer = (todos = initialTodos, action) => {
  switch (action.type) {
    case ADD:
      return [...todos, action.todo];
    case COMPLETE:
      return todos.map((todo) => {
        if (todo.id === action.todoId) {
          const currentCompleted = todo.completed;

          return {
            ...todo,
            completed: !currentCompleted,
          };
        }

        return todo;
      });
    case UPDATE:
      return todos.map((todo) => {
        if (todo.id === action.todoId) {
          return {
            ...todo,
            title: action.newTitle,
          };
        }

        return todo;
      });
    case DELETE:
      return todos.filter(todo => todo.id !== action.todoId);
    case FILTER:
      return todos.filter(todo => todo.category === action.category);
    default:
      return todos;
  }
};

export default todosReducer;
