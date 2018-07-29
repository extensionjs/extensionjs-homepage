import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Page from './Page';

test('Should render w/o crashing!', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page />, div);
  ReactDOM.unmountComponentAtNode(div);
});
