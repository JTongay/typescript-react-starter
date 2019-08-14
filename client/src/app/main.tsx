import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { App } from './';

import Nav from 'app/components/nav/nav';

export class Main extends React.Component {
  public render(): React.ReactFragment {
    return (
      <HashRouter basename="/">
        <div className="main-container">
          <Nav />
          <App />
        </div>
      </HashRouter>
    );
  }
}
