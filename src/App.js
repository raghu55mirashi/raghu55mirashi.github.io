import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './Main';

import Admin from './components/admin/admin';
import GlobalStore from './store/GlobalStore'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route path="/" component={
          () => (
            <GlobalStore>
              <Main />
            </GlobalStore>
          )
        } />
      </Switch>
    </Router>
  );
}

export default App;

