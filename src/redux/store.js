import reducer from './reducers/index';
import { createStore } from 'redux';
import { saveState, loadState } from './localstorage';


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

export default store;