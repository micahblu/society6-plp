import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './styles.css';

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <div className="App-header">
          <img src={logo} alt="Society6" />
        </div>
      </header>
    );
  }
}

export default Header;
