import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import VolunteerPage from './components/volunteerpage/volunteerpage';
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
            <VolunteerPage />
          </Route>
        </Switch>
      </Router >
    </div>

  );
}

export default App;
