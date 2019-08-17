import React from 'react';
import ReactDom from 'react-dom';
import Header from './';

it('renders without crasing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Header />, div);
});