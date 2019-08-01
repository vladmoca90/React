import React from 'react';
import ReactDOM from 'react-dom';
import Showroom from './cars';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Showroom />, div);
  ReactDOM.unmountComponentAtNode(div);
});
