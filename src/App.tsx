import { Button } from 'evergreen-ui';
import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <Button>I am using 🌲 Evergreen!</Button>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
