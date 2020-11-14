const state = {
  todos: [
    {
      id: 1,
      title: 'learn TypeScript',
      category: 'education',
      completed: false,
    },
    {
      id: 2,
      category: 'health',
      title: 'provide a blood test',
      completed: true,
    },
  ],
  categories: ['education', 'health', 'fun'],
  filteredTodos: [],
};

export default state;
