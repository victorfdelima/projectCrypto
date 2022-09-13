import { Switch, Route } from 'react-router-dom';
import React from 'react';
import App from './App';

export function Routes() {
  return (
    <Switch>
      <Route path="/my-pools" exact component={App} />
      <Route path="/" component={App} />
    </Switch>
  );
}