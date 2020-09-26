import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage/homepage.js'
import Button from './components/buttons/buttons.js'
import AdminLink from './components/links/adminLink.js'
import 'fontsource-roboto';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className="App-header">
        <h1>Welcome to TaskMe</h1>        
        <Button title='Volunteer'/>
        <p>or</p>
        <Button title='Coordinator'/>
        <AdminLink/>
      </header>
     
    </div>
  );
}

export default App;
