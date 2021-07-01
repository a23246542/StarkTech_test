import React, { createContext, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeContextValue = {
    isDarkMode,
    setIsDarkMode,
  };

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      document.getElementById('root').classList.toggle('dark-mode');
    } else {
      isMounted.current = true;
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
