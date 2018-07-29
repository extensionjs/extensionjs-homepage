import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ExternalLink from './ExternalLink';

test('It should render w/o Errors.', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <ExternalLink url="https://extensionjs.github.io/" text="Visit Website" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
