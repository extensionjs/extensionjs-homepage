import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hero from './Hero';

test('It should render w/o Errors.', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Hero
    imageSrc="/static/img/logo.png"
    title="Title"
    subTitle="Some meaningful subtitle!"
    actionText="Click Me!"
    actionUrl="/test"
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
