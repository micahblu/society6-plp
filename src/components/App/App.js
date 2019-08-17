import React, { PureComponent } from 'react';
import {Provider} from 'react-redux';
import store from '../../store';
import Header from '../Header';
import './styles.css';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;
