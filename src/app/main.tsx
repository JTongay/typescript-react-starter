import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { App } from './';
import { Nav } from './components';

export class Main extends React.Component {
  public render(): React.ReactFragment {
    return (
      <HashRouter>
        <div className="main-container">
          <Nav />
          <App />
        </div>
      </HashRouter>
    );
  }
}
