const state = {
  todos: [
    {
      id: 1,
      title: 'learn TypeScript',
      category: 'education',
      completed: true,
    },
    {
      id: 2,
      category: 'health',
      title: 'provide a blood test',
      completed: false,
    },
  ],
  categories: ['education', 'health', 'fun'],
  filteredTodos: [],
};

export default state;
