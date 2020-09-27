import { combineReducers } from 'redux';
import areaReducer from './areaReducer';
import taskReducer from './taskReducer';

export default combineReducers({
  areas: areaReducer,
  tasks: taskReducer
})