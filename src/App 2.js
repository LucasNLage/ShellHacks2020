import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage/homepage.js'
import Button from './components/buttons/buttons.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button title='Volunteer'/>
      <p>or</p>
      <Button title='Coordinator'/>
     
      </header>
    </div>
  );
}

export default App;
