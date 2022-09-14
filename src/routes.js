import { Switch, Route } from 'react-router-dom';
import React from 'react';
import App from './App';
import { Pools } from './pools';

export function Routes() {
  return (
    <Switch>
      <Route path="/my-pools" exact component={Pools} />
      <Route path="/" component={App} />
    </Switch>
  );
}