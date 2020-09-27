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
import TaskRegistration from "./components/taskform/taskform.js"



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
            {/* <EventConfirmation /> */}
            {/* <VolunteerPage /> */}
          </Route>
          <Route path="/accesscode">
            <AccessCodePage />
          </Route>
          <Route path="/areas">
            <AreaPage />
          </Route>
          <Route path="/event">
            <EventRegistrationForm />
          </Route>
          <Route path="/eventConfirmation">
            <EventConfirmation />
          </Route>
          <Route path="/taskRegistration">
            <TaskRegistration />
          </Route>
          <Route path="/volunteer">
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
