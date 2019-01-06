import { Home } from 'app/sections';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
));
