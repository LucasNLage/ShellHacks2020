import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage/homepage.js'
import Button from './components/buttons/buttons.js'

import AdminLink from './components/links/adminLink.js'
import 'fontsource-roboto';
import { makeStyles } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/">

          <HomePage />
        </Route>
      </Switch>
    </Router >

          
          <HomePage />
        </Route>
        <Route exact path="/test">
          
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </div>

  );
}

export default App;
