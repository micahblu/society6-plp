import React from 'react';
import ReactDom from 'react-dom';
import Button from './';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Button />, div);
});