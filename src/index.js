import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HomePage from './components/homepage/homepage.js';
import axios from "axios"
import { Provider as ReduxProvider } from 'react-redux';
import reducer from './redux/reducers/index';
import { createStore } from 'redux';
import { saveState, loadState } from './redux/localstorage';
axios.defaults.baseURL = 'http://165.22.38.77:3001';

let locallyStoredState = loadState();
let store;
if (!locallyStoredState) {
  store = createStore(reducer);
} else {
  store = createStore(reducer, locallyStoredState)
}

store.subscribe(() => {
  saveState(store.getState());
})


ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
