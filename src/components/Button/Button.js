import React from 'react';
import './styles.css';

export default props => (
  <button 
    className={props.active ? 'active' : ''}
    onClick={e => props.onClick(e)}
  >
    {props.children}
  </button>
);
