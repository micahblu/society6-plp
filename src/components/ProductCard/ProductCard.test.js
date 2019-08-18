import React from 'react';
import ReactDom from 'react-dom';
import Card from './';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Card product={{
    card: {
      title: 'Let The Sunshine In',
      image: {
        alt: 'Let The Sunshine In',
        src: 'https://ctl.s6img.com/society6/img/2E2o6qYGktuwsWHBbaRgZUGQu0E/h_264,w_264/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/937c6a34fe1742cd9f4eee0c6f6289bf/~~/let-the-sunshine-in1513559-prints.jpg'
      }
    },
    artist: {
      display_name: 'moderntropical'
    },
    product: {
      promote_cnt: 5172,
      price: 24.99
    }
  }} />, div);
})