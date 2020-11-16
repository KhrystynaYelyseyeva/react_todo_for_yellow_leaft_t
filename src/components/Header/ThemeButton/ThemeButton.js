import React, { memo, useContext } from 'react';

import { ThemeContext } from '../../../context/ThemeContext';
import { getTheme } from '../../../themes/themes';

import './ThemeButton.scss';

export const ThemeButton = memo(() => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme((current) => {
      if (current === 'dark') {
        return 'light';
      }

      return 'dark';
    });
  };

  return (
    <button
      type="button"
      className={`ThemeButton ${getTheme(theme, 'theme.button')}`}
      onClick={handleThemeChange}
    >
      switch&nbsp;
      <span>
        {theme === 'dark' ? 'light' : 'dark'}
      </span>
    </button>
  );
});
