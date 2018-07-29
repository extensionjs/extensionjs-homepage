import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppBar from './AppBar';

test('Should render w/o crashing!', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppBar title="Testing" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

