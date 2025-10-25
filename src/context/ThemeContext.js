/**
 * Theme Context - Manages theme settings
 *
 * Copyright (c) 2022 Jonathan Klimoski
 * Licensed under the MIT License
 */

import React, { createContext, useContext, useState } from 'react';
import { RPG_THEME } from '../theme/rpgTheme';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ theme: RPG_THEME, darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
