const themes = {
  light: {
    'app.body': 'App--light',
    'header.burger': 'HeaderBurger--light',
    'theme.button': 'ThemeButton--light',
  },
  dark: {
    'app.body': 'App--dark',
    'header.burger': 'HeaderBurger--dark',
    'theme.button': 'ThemeButton--dark',
  },
};

export const getTheme = (theme, tag) => themes[theme][tag];
