import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../contexts/ThemeContext';

export default function App({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

App.propTypes = {
  children: PropTypes.any,
};
