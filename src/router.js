import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Game from './components/Game';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/"  component={Game} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
