import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages'
import { BrowserRouter as Router, Route, Switch } from'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />     
    </div>
  );
}

export default App;
