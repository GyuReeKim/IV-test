import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Home} exact={true} />
      <Route path="/game" component={Game} />
    </div>
  )
};

export default App;
