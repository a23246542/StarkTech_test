import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './App';
import Submit from './Submit';

const RouterView = () => {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/submit">
        <Submit />
      </Route>
    </Router>
  );
};

export default RouterView;
