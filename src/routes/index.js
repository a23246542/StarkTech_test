import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './App';
import Submit from './Submit';

const RouterView = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/submit">
          <Submit />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterView;
