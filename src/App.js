import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage/homepage.js'
import VolunteerPage from './components/volunteerpage/volunteerpage.js'
import AccessCodePage from './components/accesscodepage/acesscodepage.js';
import CoordinatorPage from './components/coordinatorpage/coordinatorpage.js'
import EventRegistrationForm from './components/eventRegistration/eventRegistration.js'
import EventConfirmation from './components/eventconfirmation/eventconfirmation.js'
import AdminLink from './components/links/adminLink.js'
import { makeStyles } from '@material-ui/core/styles';
import AreaPage from "./components/areapage/areapage.js"



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
            {/* <HomePage /> */}
            <EventConfirmation />
          </Route>
          <Route path="/accesscode">
            <AccessCodePage /> 
          </Route>
          <Route path="/event">
            <EventRegistrationForm />
          </Route>
          <Route path="/eventRegistration">
            <EventRegistrationForm />
          </Route>
          <Route path="/taskRegistration">
            {/* <TaskForm /> */}
            <h1>Taskform</h1>
          </Route>
          <Route path="/volunteerPage">
            <VolunteerPage />
          </Route>
          <Route path="/coordinatorPage">
            <CoordinatorPage />
          </Route>
          <Route path="/coordinatorPage">
            <CoordinatorPage />
          </Route>
          <Route path="/coordinatorPage">
            <CoordinatorPage />
          </Route>
          <Route path="/areaPage">
            <AreaPage />
          </Route>
        </Switch>
      </Router >
    </div>

  );
}

export default App;
