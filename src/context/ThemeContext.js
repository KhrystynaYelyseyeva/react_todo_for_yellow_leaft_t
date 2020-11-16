import React, { useMemo, useState, createContext } from 'react';
import { getTheme } from '../themes/themes';

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
      <div className={`App ${getTheme(contextValue.theme, 'app.body')}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
