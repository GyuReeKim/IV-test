import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Home} exact={true} />
      </div>
    );
  }
}

export default App;
