import React, { useMemo, useState, createContext } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
});

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const contextValue = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
