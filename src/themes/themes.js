const themes = {
  light: {
    'app.body': 'App--light',
    'theme.button': 'ThemeButton--light',
    'sidebar.body': 'Sidebar--light',
  },
  dark: {
    'app.body': 'App--dark',
    'theme.button': 'ThemeButton--dark',
    'sidebar.body': 'Sidebar--dark',
  },
};

export const getTheme = (theme, tag) => themes[theme][tag];
