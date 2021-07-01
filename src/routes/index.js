import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './App';

const RouterView = () => {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
    </Router>
  );
};

export default RouterView;
