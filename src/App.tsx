import { Button } from 'evergreen-ui';
import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <div>
            <Button>I am using 🌲 Evergreen!</Button>
          </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
