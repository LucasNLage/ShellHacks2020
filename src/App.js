import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage/homepage.js'
import AdminLink from './components/links/adminLink.js'
import { makeStyles } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import VolunteerPage from './components/volunteerpage/volunteerpage';
import AreaPage from './components/areapage/areapage';
// 165.22.38.77:3001

function App() {
  // Create WebSocket connection.
  const socket = new WebSocket('ws://165.22.38.77:3002/bananas');

  // Connection opened
  socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
  });

  // Listen for messages
  socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
  });
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <VolunteerPage /> */}
            <AreaPage />
          </Route>
        </Switch>
      </Router >
    </div>

  );
}

export default App;
