import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HeroButton from './HeroButton';

test('It should render w/o Errors.', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <HeroButton text="Click me to be a Hero!" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
