import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Result from './pages/Result';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Home} exact={true} />
      <Route path="/game" component={Game} />
      <Route path="/result/:name" component={Result} />
    </div>
  )
};

export default App;
