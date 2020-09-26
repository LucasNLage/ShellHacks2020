import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage/homepage.js'
import Button from './components/buttons/buttons.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Hi</h1>
          <HomePage />
        </Route>
        <Route exact path="/test">
          <h1>Hello</h1>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
