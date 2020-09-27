import { SETTASKS } from '../actionTypes';

export default function(state = null, action) {
  switch (action.type) {
    case SETTASKS: {
      return action.payload.tasks;
    }

    default: {
      return state;
    }
  }
}